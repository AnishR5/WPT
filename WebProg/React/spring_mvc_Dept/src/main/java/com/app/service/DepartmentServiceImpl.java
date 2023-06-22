package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.DepartmentDao;
import com.app.pojos.Department;

@Service //mandatory annotation to tell sc following is a spring bean containing B.L.
@Transactional  //mandatory annotation to tell sc to manage transactions automatically
public class DepartmentServiceImpl implements DepartmentService {
	//dependency: dao layer i/f
	@Autowired  //bytype--> field level DI
	private DepartmentDao deptDao;
	//SC checks returntype--> here DepartmentDao(byType) 
	
	
	@Override
	public List<Department> getAllDepts() {
		
		return deptDao.getAllDepartments();
	}

}
