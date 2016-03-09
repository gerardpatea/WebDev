using Microsoft.AspNet.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Services;
using WebApplication2.ViewModels;

namespace WebApplication2.Controllers.Web
{
    public class AppController : Controller
    {
        private IMailService _mailService;

        public AppController(IMailService service)
        {
            _mailService = service;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Contact(ContactViewModel model)
        {
            if (ModelState.IsValid)
            {
                var email = Startup.Configuration["AppSettings:SiteEmailAddress"];

                if (String.IsNullOrEmpty(email))
                    ModelState.AddModelError("", "Email configuration is invalid");

                var sent = _mailService.SendMail(email, email, $"Contact page from: {model.Name}", model.Message);

                if (sent)
                {
                    ModelState.Clear();
                    ViewBag.Message = "Mail sent! Thanks";
                }
            }

            return View();
        }
    }
}
