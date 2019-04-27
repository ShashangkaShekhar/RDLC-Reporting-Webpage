using DataFactory.backoffice;
using DataModels.ViewModels;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Syncfusion.EJ.ReportViewer;
using Syncfusion.Report;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace LibraryMgt.Web.serverapp.backoffice
{
    [Route("api/[controller]"), EnableCors("AppPolicy")]
    [ApiController]
    public class reportviewerController : Controller, IReportController
    {
        private Report _objreport = null;
        private IMemoryCache _cache;
        private IHostingEnvironment _hostingEnvironment;

        public reportviewerController(IMemoryCache memoryCache, IHostingEnvironment hostingEnvironment)
        {
            _cache = memoryCache;
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpPost("[action]")]
        public object PostReportAction([FromBody] Dictionary<string, object> jsonResult)
        {
            return ReportHelper.ProcessReport(jsonResult, this, this._cache);
        }

        [ActionName("GetResource")]
        [AcceptVerbs("GET")]
        public object GetResource(ReportResource resource)
        {
            return ReportHelper.GetResource(resource, this, _cache);
        }

        [HttpPost("[action]")]
        public object PostFormReportAction()
        {
            return ReportHelper.ProcessReport(null, this, this._cache);
        }

        public void OnInitReportOptions(ReportViewerOptions reportOption)
        {
            string basePath = _hostingEnvironment.WebRootPath;
            List<ReportParameter> parameters = new List<ReportParameter>();
            parameters.Add(new ReportParameter()
            {
                Name = "Title",
                Labels = new List<string>() { "BOOK REPORTS" },
                Values = new List<string>() { "" }
            });
            reportOption.ReportModel.Parameters = parameters;

            FileStream inputStream = new FileStream(basePath + @"\reportfile\rptBooks.rdlc", FileMode.Open, FileAccess.Read);
            reportOption.ReportModel.Stream = inputStream;
            reportOption.ReportModel.ProcessingMode = ProcessingMode.Local;
        }

        public async void OnReportLoaded(ReportViewerOptions reportOption)
        {
            _objreport = new Report();
            List<vmBook> books = new List<vmBook>();
            books = await _objreport.getbookreport();
            reportOption.ReportModel.DataSources.Add(new ReportDataSource { Name = "DataSetBooks", Value = books.ToList() });
        }
    }
}