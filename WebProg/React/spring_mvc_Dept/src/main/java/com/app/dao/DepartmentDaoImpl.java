package com.app.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.pojos.Department;

@Repository //mandatory annotation to tell SC : following is spring beans containing data access level
public class DepartmentDaoImpl implements DepartmentDao {
	//dependency: SF
	@Autowired //mandatory dependency==> required=true , field level dependency injection
	private SessionFactory sf;  //Automatically supplied by spring  : LocalSessionFactory bean

	@Override
	public List<Department> getAllDepartments() {
		
		return sf.getCurrentSession()
				.createQuery("select d from Department d", Department.class)
				.getResultList();
	}

}
