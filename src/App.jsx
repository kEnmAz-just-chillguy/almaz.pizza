import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import MenuList from './components/MenuList'
import Discount from './components/Discount'
import Footer from './components/Footer'
import Card from './components/Card'
import { CiFilter } from "react-icons/ci";
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BucketPage from './pages/BucketPage'
import SecondNavbar from './components/SecondNavbar'


function App() {
const [menu,setMenu] = useState([])
const [bucket,setBucket] = useState([])
const [user,setUser] = useState('')
const [isMenuOpen,setIsMenuOpen] = useState(true)

const changeMenu = () => {
  const change = [...menu].sort(() => Math.random() - 0.5)
  setMenu(change)
  const drawerCheckbox = document.getElementById("my-drawer-4");
  if (drawerCheckbox) {
    drawerCheckbox.checked = false;
  }

  const activeButtons = document.querySelectorAll(".drawer-side .btn-primary");
  activeButtons.forEach((btn) => {
    btn.classList.remove("btn-primary");
  });
}


useEffect(() => {
 setUser(JSON.parse(localStorage.getItem("registerData")))

},[])
const [registerError,setRegisterError] = useState({
  registerAll:false,
  name:false,
  email:false,
  password:false,
})
const [signInError,setSignInError] = useState({
  registerAll:false,
  name:false,
  email:false,
  password:false,
})
const [registerData, setRegisterData] = useState({
  name:"",
  email:"",
  password:"",
})
const [signInData, setSignInData] = useState({
  name:"",
  email:"",
  password:"",
})
const location = useLocation()
const regexPassword = /^.{8,}$/;
const regexEmail = /^.{4,}@gmail\.com$/;
const regexName = /^[A-Za-zА-Яа-яЁё]{8,16}$/;


  useEffect(() => {
    fetch("/data/fakedata.json")
    .then((res) => res.json())
    .then((data) => {
      setMenu(data)
    })
  },[])

const removeUser = () => {
  if (localStorage.getItem('registerData')) {
    localStorage.removeItem('registerData');
  }
  window.location.reload()
}

const handleSubmitRegister = (e) => {
  e.preventDefault();




  if(!registerData.name || !registerData.email || !registerData.password){
    setRegisterError(prevState => ({
      ...prevState,
      registerAll:true
    }))
  }else if (!regexName.test(registerData.name)){
    setRegisterError(prevState => ({
      ...prevState,
      name:true
    }))
  }else if(!regexEmail.test(registerData.email)){
    setRegisterError(prevState => ({
      ...prevState,
      email:true
    }) )
  }else if(!regexPassword.test(registerData.password)){
    setRegisterError(prevState => ({
      ...prevState,
      password:true
    }))
  }else{localStorage.setItem("registerData", JSON.stringify(registerData))
window.location.reload()

  }

setTimeout(() => {
  setRegisterError(prevState => ({
    ...prevState,
    registerAll:false
  }))
  setRegisterError(prevState => ({
    ...prevState,
    name:false
  }))
  setRegisterError(prevState => ({
    ...prevState,
    email:false
  }) )
  setRegisterError(prevState => ({
    ...prevState,
    password:false
  }))
}, 2000);


}
const handleSubmitSignIn = (e) => {
e.preventDefault();

if(!signInData.email || !signInData.password || !signInData.name) {
  setSignInError(prevState => ({
    ...prevState,
    registerAll:true
  }))
}else if(!regexName.test(signInData.name)){
  setSignInError(prevState =>({
    ...prevState,
    name:true
  }))
}
else if (!regexEmail.test(signInData.email)){

  setSignInError(prevState => ({
    ...prevState,
    email:true
  }))
}else if(!regexPassword.test(signInData.password)){
  setSignInError(prevState => ({
    ...prevState,
    password:true
  }))
}
else {localStorage.setItem("registerData", JSON.stringify(signInData))
  window.location.reload()

}

setTimeout(() => {
  setSignInError(prevState => ({
    ...prevState,
    registerAll:false
  }))
  setSignInError(prevState => ({
    ...prevState,
    name:false
  }))
  setSignInError(prevState => ({
    ...prevState,
    email:false
  }) )
  setSignInError(prevState => ({
    ...prevState,
    password:false
  }))
}, 2000);
}


const isBucked = location.pathname === "/bucket"

  return (
    <>
 {isBucked &&  <SecondNavbar user={user} />}

     <Routes>
      <Route path='/' element={<HomePage isMenuOpen={isMenuOpen} changeMenu={changeMenu} user={user} menu={menu}/>}/>

  
   <Route path='/bucket' element={<BucketPage  menu={menu}/>}/>

     </Routes>
   
      <Footer/>

      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div className='flex flex-col gap-3 justify-center text-center'>
  <h3 className="font-bold text-xl">Регистрация</h3>
  <input type="text" required value={registerData.name} onChange={(e) => (setRegisterData(prevState => ({
    ...prevState,
    name:e.target.value
  })))} className='border-primary hover:border-black border-2 rounded-sm w-full pt-4 px-2 pb-1 placeholder:text-2xl text-2xl outline-none' placeholder='Имя' />
  <p className='text-red-600 '>{registerError.name ? "Тут должен быть 8 букв и не более 16" : ""}</p>
  <input required value={registerData.email} onChange={(e) => (setRegisterData(prevState => ({
    ...prevState,
    email:e.target.value
  })))} type="email" className='border-primary hover:border-black border-2 rounded-sm w-full pt-4 px-2 pb-1 placeholder:text-2xl text-2xl outline-none' placeholder='Эл. почта' />
   <p className='text-red-600 '>{registerError.email ? "Тут должен быть настоящий емайл" : ""}</p>
  <input required value={registerData.password} onChange={(e) => (setRegisterData(prevState => ({
    ...prevState,
    password:e.target.value
  })))} type="password" className='border-primary hover:border-black border-2 rounded-sm w-full pt-4 px-2 pb-1 placeholder:text-2xl text-2xl outline-none' placeholder='Пароль' />
  
       <p className='text-red-600 '>{registerError.password ? "Тут должен быть 8 символ" :""}</p>
  <p className='whitespace-pre-line'>Продолжая, вы соглашаетесь со сбором и {'\n'}обработкой персональных данных и {'\n'}пользовательским соглашением</p>
  <button onClick={handleSubmitRegister} className='btn hover:btn-primary text-lg fond-medium'>Зарегистрироваться</button>
  <p className='text-red-600 '>{registerError.registerAll ? "Пожалуйста заполните все поля" :""}</p>
  <p>Уже есть аккаунт? 
    <form className='inline' method='dialog'>
      <button className="text-primary hover:underline underline-" onClick={()=>document.getElementById('my_modal_5').showModal()}>
          Войти
      </button>
    </form>
  </p>
</div>

  </div>
</dialog>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <div className='flex flex-col gap-3 justify-center text-center'>
  <h3 className="font-bold text-xl">Вход</h3>
  <input type="text" required value={signInData.name} onChange={(e) => (setSignInData(prevState => ({
    ...prevState,
    name:e.target.value
  })))} className='border-primary hover:border-black border-2 rounded-sm w-full pt-4 px-2 pb-1 placeholder:text-2xl text-2xl outline-none' placeholder='Имя' />
   <p className='text-red-600 '>{signInError.name ? "Такого ника нету" : ""}</p>
<input required value={signInData.email} onChange={(e) => (setSignInData(prevState => ({
  ...prevState,
  email:e.target.value
})))} type="email" className='border-primary hover:border-black border-2 rounded-sm w-full pt-4 px-2 pb-1 placeholder:text-2xl text-2xl outline-none' placeholder='Эл. почта' />
  <p className='text-red-600 '>{signInError.email ? "Неверный емайл" : ""}</p>
<input required value={signInData.password} onChange={(e) => (setSignInData(prevState => ({
  ...prevState,
  password:e.target.value
})))} type="password" className='border-primary hover:border-black border-2 rounded-sm w-full pt-4 px-2 pb-1 placeholder:text-2xl text-2xl outline-none' placeholder='Пароль' />
       <p className='text-red-600 '>{signInError.password ? "Неправилний пароль" :""}</p>
<p className='whitespace-pre-line'>Продолжая, вы соглашаетесь со сбором и {'\n'}обработкой персональных данных и {'\n'}пользовательским соглашением</p>
<button onClick={handleSubmitSignIn} className='btn hover:btn-primary text-lg fond-medium'>Войти</button>
<p className='text-red-600 '>{signInError.registerAll ? "Пожалуйста заполните все поля" :""}</p>
<p>Нету аккаунта?
    <form className='inline' method='dialog'>
      <button className="text-primary hover:underline underline-" onClick={()=>document.getElementById('my_modal_3').showModal()}>
          Зарегистрироваться
      </button>
    </form>
  </p>
</div>
<div className="modal-action">
  <form method="dialog">
    <button className="btn hover:btn-primary">Закрыть</button>
      </form>
    </div>
  </div>
</dialog>

<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Вы точно хотите выйти с аккаунта?</h3>
    <p className="py-4">При выходе вы можете потерять доступ к некоторым функциям, таким как история заказов, персональные рекомендации и сохранённые данные.
    Вы действительно хотите продолжить?</p>
    <div className="modal-action flex justify-center">
      <form method="dialog ">
   <div className='flex gap-25'>
   <button onClick={() => removeUser()} className='btn hover:btn-error'>Выйти</button>
   <button className="btn hover:btn-primary  ">Отмена</button>
   </div>
      </form>
    </div>
  </div>
</dialog>
    </>
  )
}

export default App
