package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.app.service.DepartmentService;

@Controller
@RequestMapping("/departments") //optional but recoommended fro seperation 
//this spring bead will handle all dept related requests
public class DepartmentController {
	
	//dependency :service layer i/f
	@Autowired //by type, field level DI
	private DepartmentService deptService;
	//container searches a bean which has implemented DepartmentService(byType) 
	
	public DepartmentController() {
		System.out.println("in ctor of "+getClass());
	}
	
	//add a request handling method 
	@GetMapping("/list")
	public ModelAndView getDeptList() {
		System.out.println("In get dept list");
		return new ModelAndView("/dept/list", "dept_list", deptService.getAllDepts());
		//controller --> ModelandView object --> D.S --> LVN --> viewResolver --> AVN : WEB-INF/views/dept/list.jsp-->D.S
		//Yes-->req.setAttr("dept_list",deptlist);
		//Rd rd =req.getRD(" WEB-INF/views/dept/list.jsp")
		//rd.forward(request,resp) --> ${}
		
	}

}
