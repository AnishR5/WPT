package com.app.controller;

import java.time.LocalDateTime;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller //mandatory to tell SC : following is a req handling controller=Handler, containing req Handling methods
public class HomePageController {
	
	public HomePageController() {
		System.out.println("in ctor of : "+getClass());
	}
	
	//add req handling method to forward the clnt to index.jsp
	@RequestMapping("/") //can intercept : get/put/post/delete
	public ModelAndView showHomePage() {
		System.out.println("in show home page");
		//API of o.s.w.s.ModelAndView(String viewName, String modelName, Object modelObject)
		return new ModelAndView("/index", "timestamp", LocalDateTime.now());
		//if / not added 404 Error viewName= url
		// HAndler method return -->Modelview objet --> D.S --> sends LVN -->
		//ViewResolver - returns-->AVN(Actual viename)): /WEB-INF/views/index.jsp
		//checks for model attrs --> Yes --> Saves it under request Scope 
		//why? -->Server pull --> RD rd=req.getRd("/WEB-INF/views/index.jsp")
		//rd.forward(request,resp)-->Jsp --> ${RequestScope.}
		
		
	}
	

}
