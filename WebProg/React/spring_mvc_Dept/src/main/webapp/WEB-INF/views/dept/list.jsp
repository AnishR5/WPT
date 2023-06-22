<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<table style="background-color: lightgrey; margin: auto">
	<caption>All Departments</caption>
	<c:forEach var="dept" items="${requestScope.dept_list }">
	<tr>
		<td>${dept.id} </td>
		<td>${dept.departmentName}</td>
		<td>${dept.location}</td>
	</tr>
	</c:forEach>
	

</table>

</body>
</html>