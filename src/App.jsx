
import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, SetUserData] = useContext(AuthContext)

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem('loggedInUser')

  //   if (loggedInUser) {
  //     const userData = JSON.parse(loggedInUser);
  //     setUser(userData.role);
  //     // setLoggedInUserData(userData.data)         incorrect
  //     setLoggedInUserData(userData.data || null);
  //   }

  // }, [])
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      // console.log('Logged in user data:', loggedInUser); // Debugging log
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data || null);
    }
  }, []);


  const handleLogin = (email, password) => {
    const { employees } = JSON.parse(localStorage.getItem('employees')) || {};    //missing
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      } else if (userData) { //      incorrect
    // } else if (employees) {
      const employee = userData.find((e) => e.email === email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }
    }
    else {
      alert("Invalid Credentials me")
    }
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
    </>
  )
}

export default App
