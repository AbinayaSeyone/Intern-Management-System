import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clickonevacancy from '../pages/Clickonevacancy';
import Postinternpool from '../pages/Postinternpool'
import Clickoneinstitution from '../pages/Clickoneinstitution';
import Detailsofpublisher from '../pages/Detailsofpublisher';
import Institutionfilter from '../pages/Institutionfilter';
import InternDetails from '../pages/InternDetails';
import OtpPublisher from '../pages/OtpPublisher';
import Vacancyfilter from '../pages/Vacancyfilter';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Editprofile from '../pages/Editprofile';
import EditProfile2 from '../pages/Editprofile2';
import VacancyH from '../pages/VacancyH';
import Hiringprocess1 from '../pages/Hiringprocess1';
import ProfileCard from '../pages/ProfileCard';
import ProfileFilter from '../pages/ProfileFilter';
import Jobcard from '../pages/Jobcard';
import ProfilePage from '../pages/ProfilePage';
import Jobcreation from '../pages/Jobcreation';
import HirLast from '../pages/HirLast';
import AplyVac from '../pages/Apply';
import CngPsw from '../pages/ChangePassword';
import ComChat from '../pages/Chat';
import ComPro from '../pages/Company';
import DisMes from '../pages/DisplayMassage01';
import DisMes2 from '../pages/DisplayMassage02';
import EdtPro from '../pages/EditPro';
import EtrEmil from '../pages/EnterEmail';
import InRn from '../pages/Intern';
import LogIn from '../pages/Login';
import MyApp from '../pages/MyApp';
import GetNotification from '../pages/Notification';
import VerOtp from '../pages/OTP verify';
import SelVac from '../pages/Vacancies';
import VewPro from '../pages/VewProfile';
import ComView from '../pages/ViewComp';
import WishList from '../pages/Wishlist';
import VewNot from '../pages/ViewNotification';
import CreAcc from '../pages/Account';
import HomeC from "../pages/HomeC";
import Student1 from '../pages/Student1';
import Sverification from '../pages/Sverification';
import Company1 from "../pages/Company1";
import Company2 from "../pages/Company2";
import Admin from "../pages/Admin";

import JobDescription from "../pages/JobDescription";
import Internpoolverification from "../pages/Internpoolverification";
import HomeSample from "../pages/HomeSample";
import FileUpload from "../pages/FileUpload";
import File from"../pages/File";
import Apply2 from "../pages/Apply 2";
import RegisterC from "../pages/RegisterC";
import Register from "../pages/Register";
import PostVacancyC from "../pages/PostVacancyC";
import ApplicantC from "../pages/ApplicantC";
import InternDetailC from "../pages/InternDetailC";
import CompanyHome from "../pages/CompanyHome";
import EditC from "../pages/EditC";
import AddHiringManager from "../pages/AddHiringManager";
import WishlistCardH from "../pages/WishlistCardH";
import Jdelete from "../pages/Jdelete";
import HireUpdate from "../pages/HireUpdate";
import JobUpdateP from "../pages/JobUpdateP";
import HfrontPage from "../pages/HfrontPage";
import Hprofile from "../pages/Hprofile";
import VerifySuccess from "../pages/VerifySuccess";
import InternFilter from "../pages/InternFilter";
import Internpoolverify from "../pages/Internpoolverify";
import AdminTable from "../pages/AdminTable";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route exact path="/interndetails/" element={<InternDetails></InternDetails>} />
                <Route exact path="/" element={<Home></Home>} />
                <Route exact path="/home" element={<HomeSample></HomeSample>} />
                <Route exact path="/file" element={<FileUpload/>} />
                <Route exact path="/file1" element={<File/>} />
                <Route exact path="/institution" element={<Institutionfilter></Institutionfilter>} />
                <Route exact path="/intern1" element={<InternFilter></InternFilter>} />

                <Route exact path="/vacancy/" element={<Vacancyfilter></Vacancyfilter>} />
                <Route exact path="/postinternpool" element={<Postinternpool/>} />
                <Route exact path="/detailsofpublisher/:internPoolId" element={<Detailsofpublisher></Detailsofpublisher>} />
                <Route exact path="/verify/:internPoolId" element={<VerifySuccess></VerifySuccess>} />
                <Route exact path="/clickonevacancy/:vacancyId" element={<Clickonevacancy/>} />
                <Route exact path="/clickoneinstitution/:institutionId" element={<Clickoneinstitution/>} />
                {/* <Route exact path="/detailsofpublisher" element={<OtpPublisher></OtpPublisher>} /> */}
                <Route exact path="/otp/:internPoolId" element={<OtpPublisher/>} />
                {/* <Route exact path="/otp" element={<OtpPublisher/>} /> */}
                <Route exact path="/dashBoard" element={<Dashboard></Dashboard>} />
                <Route exact path="/home" element={<Dashboard></Dashboard>} />
                <Route exact path="/login" element={<Login></Login>} />
                <Route exact path="/editprofile" element={<Editprofile></Editprofile>} />
                <Route exact path="/editprofileS" element={< EditProfile2></ EditProfile2>} />
                <Route exact path="/vacancyH" element={< VacancyH></VacancyH>} />
                <Route exact path="/hiringprocess1" element={<Hiringprocess1></Hiringprocess1>} />
                <Route exact path="/profilecard/:vacancyId" element={<ProfileCard/>} />
                <Route exact path="/profileFilter" element={<ProfileFilter/>} />
                <Route exact path="/Jobcard" element={<Jobcard/>} />
                <Route exact path="/ProfilePage" element={<ProfilePage/>} />
                <Route exact path="/ProfilePage/:userid" element={<ProfilePage/>}/>
                <Route exact path="/Jobcreation" element={<Jobcreation/>} />
                <Route exact path="/HirLast" element={<HirLast/>} />
                <Route exact path="/Account" element={<CreAcc></CreAcc>} />
                <Route exact path="/OTP verify" element={<VerOtp></VerOtp>} />
                <Route exact path="/Apply/:vacancyId" element={<AplyVac></AplyVac>} />
                <Route exact path="/ChangePassword" element={<CngPsw></CngPsw>} />
                <Route exact path="/Chat" element={<ComChat></ComChat>} />
                <Route exact path="/Company" element={<ComPro></ComPro>} />
                <Route exact path="/DisplayMassage01" element={<DisMes></DisMes>} />
                <Route exact path="/DisplayMassage02" element={<DisMes2></DisMes2>} />
                <Route exact path="/EditPro" element={<EdtPro></EdtPro>} />
                <Route exact path="/EnterEmail" element={<EtrEmil></EtrEmil>} />
                <Route exact path="/Intern" element={<InRn></InRn>} />
                <Route exact path="/MyApp" element={<MyApp></MyApp>} />
                <Route exact path="/Notification" element={<GetNotification></GetNotification>} />
                <Route exact path="/Vacancies" element={<SelVac></SelVac>} />
                <Route exact path="/VewProfile" element={<VewPro></VewPro>} />
                <Route exact path="/ViewComp" element={<ComView></ComView>} />
                <Route exact path="/ViewNotification" element={<VewNot></VewNot>} />
                <Route exact path="/Wishlist" element={<WishList></WishList>} />
                <Route exact path="/Wishlist/:vacancyId" element={<WishList></WishList>} />
                <Route exact path="/CompanyC" element={<HomeC/>} />
                <Route exact path="/student1/" element={<Student1></Student1>} />
                <Route exact path="/studentverification/" element={<Sverification></Sverification>} />
                <Route exact path="/company1/" element={<Company1></Company1>} />
                <Route exact path="/company2/id" element={<Company2></Company2>} />
                <Route exact path="/admin/" element={<Admin></Admin>} />
                <Route exact path="/Internpoolverification/" element={<Internpoolverification/>} />
                {/*<Route exact path="/jobDes/" element={<JobDescription/>} />*/}
                <Route exact path="/jobDes/:vacancyId" element={<JobDescription/>}/>
                <Route exact path="/WishlistCardH/" element={<WishlistCardH/>}/>
                <Route exact path="/Apply2/" element={<Apply2/>} />
                <Route exact path="/PostVacancyC/" element={<PostVacancyC></PostVacancyC>} />
                <Route exact path="/appC/" element={<ApplicantC></ApplicantC>} />
                <Route exact path="/InternDetailC/" element={<InternDetailC></InternDetailC>} />
                <Route exact path="/Register/" element={<Register></Register>} />
                <Route exact path="/RegisterC/" element={<RegisterC></RegisterC>} />
                <Route exact path="/CompanyHome" element={<CompanyHome></CompanyHome>} />
                <Route exact path="/AddHC" element={<AddHiringManager></AddHiringManager>} />
                <Route exact path="/EditC" element={<EditC></EditC>}/>
                {/*<Route exact path="/SampleD/" element={<SampleD/>}/>*/}
                <Route exact path="/Jdelete" element={<Jdelete/>} />
                <Route exact path="/HireUpdate" element={<HireUpdate/>} />
                <Route exact path="/JobUpdateP/:vacancyId" element={<JobUpdateP/>} />
                <Route exact path="/HfrontPage" element={<HfrontPage/>} />
                {/*<Route exact path="/HfrontPage" element={<HfrontPage/>} />*/}
                <Route exact path="/Hprofile/:hmanagerId" element={<Hprofile/>}/>
                <Route exact path="/Internpoolverification/:id" element={<Internpoolverify/>} />
                <Route exact path="/AdminTable" element={<AdminTable/>} />

                {/*<Route exact path="/SuspendedInterns/" element={<SuspendedInterns/>} />*/}
                {/*<Route exact path="/SuspendedCompany/" element={<SuspendedCompany/>} />*/}
                {/*<Route exact path="/SuspendedPost/" element={<SuspendedPost/>}/>*/}

            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;