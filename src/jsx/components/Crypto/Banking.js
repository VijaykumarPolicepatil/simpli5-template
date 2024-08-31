import React,{useState} from 'react';
import { Dropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

//images
import studio1 from './../../../images/studio/1.jpg';
import studio2 from './../../../images/studio/2.jpg';
import studio3 from './../../../images/studio/3.jpg';
import studio4 from './../../../images/studio/4.jpg';
import studio5 from './../../../images/studio/5.jpg';

const  TargetDonutChart = loadable(() =>
	pMinDelay(import("./Banking/TargetDonutChart"), 1000)
);

const transactionBlog = [
    {image:studio1, title:'Portu Studio', price:'$ 150,036.12', date:'June 2, 2022'},
    {image:studio2, title:'Akademi Studio', price:'$ 120,036.16', date:'July 5, 2022'},
    {image:studio3, title:'Nextrun Studio', price:'$ 300,036.25', date:'July 15, 2022'},
    {image:studio4, title:'Geex Studio', price:'$ 650,036.12', date:'Aug 10, 2022'},
    {image:studio5, title:'Kleon Studio', price:'$ 780,036.31', date:'Sep 25, 2022'},
];
const cardTitle = [
    {title:'Income'},
    {title:'Outcome'},
];

const Banking = () =>{
    const [dropSelect, setDropSelect] = useState('This Month');

    return(
        <>
            <div className="row">
                <div className="col-xl-8">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-sm-6">
                            <div className="card prim-card">
                                <div className="card-body py-3">
                                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M45.333 9.3335H18.6663C16.191 9.3335 13.817 10.3168 12.0667 12.0672C10.3163 13.8175 9.33301 16.1915 9.33301 18.6668V45.3335C9.33301 47.8088 10.3163 50.1828 12.0667 51.9332C13.817 53.6835 16.191 54.6668 18.6663 54.6668H45.333C47.8084 54.6668 50.1823 53.6835 51.9327 51.9332C53.683 50.1828 54.6663 47.8088 54.6663 45.3335V18.6668C54.6663 16.1915 53.683 13.8175 51.9327 12.0672C50.1823 10.3168 47.8084 9.3335 45.333 9.3335ZM27.9997 14.6668H35.9997V22.6668H27.9997V14.6668ZM22.6663 49.3335H18.6663C17.6055 49.3335 16.5881 48.9121 15.8379 48.1619C15.0878 47.4118 14.6663 46.3944 14.6663 45.3335V41.3335H22.6663V49.3335ZM35.9997 49.3335H27.9997V41.3335H35.9997V49.3335ZM49.333 45.3335C49.333 46.3944 48.9116 47.4118 48.1614 48.1619C47.4113 48.9121 46.3939 49.3335 45.333 49.3335H41.333V41.3335H49.333V45.3335ZM49.333 36.0002H14.6663V18.6668C14.6663 17.606 15.0878 16.5885 15.8379 15.8384C16.5881 15.0883 17.6055 14.6668 18.6663 14.6668H22.6663V25.3335C22.6663 26.0407 22.9473 26.719 23.4474 27.2191C23.9475 27.7192 24.6258 28.0002 25.333 28.0002H49.333V36.0002ZM49.333 22.6668H41.333V14.6668H45.333C46.3939 14.6668 47.4113 15.0883 48.1614 15.8384C48.9116 16.5885 49.333 17.606 49.333 18.6668V22.6668Z" fill="white"/>
                                    </svg>
                                    <div className="d-flex">
                                        <h4 className="number mt-2">1234 5678 9012 3456</h4>
                                        <div className="rec-design">
                                            <div className="rec-design1">
                                            </div>
                                            <div className="rec-design2">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="prim-info">
                                            <span>Card Holder</span>
                                            <h4>Nella Vita</h4>
                                        </div>
                                        <div className="master-card">
                                            <svg width="88" height="56" viewBox="0 0 88 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="28" cy="28" r="28" fill="#FF5B5B"/>
                                                <circle cx="60" cy="28" r="28" fill="#F79F19"/>
                                            </svg>
                                            <span className="text-white d-block mt-1">Master Card</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-sm-6">
                            <div className="card exchange">
                                <div className="card-header d-block border-0 pb-0">
                                    <h2 className="heading"> Your Balance</h2>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="balance">
                                        <div className="header-content">
                                            <h6 className="text-muted">$23,741.60</h6>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-baseline">
                                            <h4 className="count-num">$23,741.60</h4>
                                            <span className="fs-14 font-w400 text-success"><i className="bi bi-caret-up-fill pe-2"></i>+ 15%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header justify-content-between border-0">
                                    <h2 className="heading mb-0">Latest Transaction</h2>
                                    <div className="d-flex align-items-center">                                        
											<Dropdown className="banking-dropdown">
												<Dropdown.Toggle as="div" className="i-false banking-select">
                                                    {dropSelect} <i className="fas fa-chevron-down ms-2"></i>
                                                </Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item onClick={()=>setDropSelect('This Mont')}>This Month</Dropdown.Item>
													<Dropdown.Item onClick={()=>setDropSelect('Week')}>Weeks</Dropdown.Item>
													<Dropdown.Item onClick={()=>setDropSelect('Today')}>Today</Dropdown.Item>
												</Dropdown.Menu>
												
											</Dropdown>
                                    </div>
                                </div>
                                <div className="card-body pt-0 px-0">
                                    <div className="table-responsive">
                                        <table className="table-responsive tb-transaction table shadow-hover mb-4 dataTable no-footer" id="example6">
                                            <tbody>
                                                {transactionBlog.map((item, index)=>(
                                                    <tr key={index}>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img src={item.image} alt="" className="avatar" />
                                                                <div className="ms-3">
                                                                    <h5 className="mb-0"><Link to={"./invoice"} className="text-secondary" >{item.title}</Link></h5>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="font-w700 fs-16">{item.price}</td>
                                                        <td className="fs-14 font-w400">{item.date}</td>
                                                        <td className="text-end pe-3">
                                                            <Link to={"#"} className="text-end">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g clipPath="url(#clip0_732_458)">
                                                                        <path d="M23 19H18.93C18.6648 19 18.4104 18.8946 18.2229 18.7071C18.0354 18.5196 17.93 18.2652 17.93 18V15H6V18C6 18.2652 5.89464 18.5196 5.70711 18.7071C5.51957 18.8946 5.26522 19 5 19H1C0.734784 19 0.48043 18.8946 0.292893 18.7071C0.105357 18.5196 0 18.2652 0 18V8C0 7.20435 0.31607 6.44129 0.87868 5.87868C1.44129 5.31607 2.20435 5 3 5H21C21.7956 5 22.5587 5.31607 23.1213 5.87868C23.6839 6.44129 24 7.20435 24 8V18C24 18.2652 23.8946 18.5196 23.7071 18.7071C23.5196 18.8946 23.2652 19 23 19ZM19.93 17H22V8C22.0015 7.86827 21.9766 7.73757 21.9269 7.61558C21.8771 7.49359 21.8035 7.38276 21.7104 7.28961C21.6172 7.19646 21.5064 7.12285 21.3844 7.07312C21.2624 7.02339 21.1317 6.99853 21 7H3C2.86827 6.99853 2.73757 7.02339 2.61558 7.07312C2.49359 7.12285 2.38276 7.19646 2.28961 7.28961C2.19646 7.38276 2.12285 7.49359 2.07312 7.61558C2.02339 7.73757 1.99853 7.86827 2 8V17H4V14C4 13.7348 4.10536 13.4804 4.29289 13.2929C4.48043 13.1054 4.73478 13 5 13H18.93C19.1952 13 19.4496 13.1054 19.6371 13.2929C19.8246 13.4804 19.93 13.7348 19.93 14V17Z" fill="#A098AE"/>
                                                                        <path d="M18.933 7H5C4.73478 7 4.48043 6.89464 4.29289 6.70711C4.10536 6.51957 4 6.26522 4 6V1C4 0.734784 4.10536 0.48043 4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0L18.933 0C19.1982 0 19.4526 0.105357 19.6401 0.292893C19.8276 0.48043 19.933 0.734784 19.933 1V6C19.933 6.26522 19.8276 6.51957 19.6401 6.70711C19.4526 6.89464 19.1982 7 18.933 7ZM6 5H17.933V2H6V5ZM17.033 24H6.9C6.13087 24 5.39325 23.6945 4.84939 23.1506C4.30554 22.6068 4 21.8691 4 21.1V14C4 13.7348 4.10536 13.4804 4.29289 13.2929C4.48043 13.1054 4.73478 13 5 13H18.93C19.1952 13 19.4496 13.1054 19.6371 13.2929C19.8246 13.4804 19.93 13.7348 19.93 14V21.1C19.93 21.8686 19.6249 22.6058 19.0817 23.1495C18.5385 23.6933 17.8016 23.9992 17.033 24ZM6 15V21.1C6 21.3387 6.09482 21.5676 6.2636 21.7364C6.43239 21.9052 6.66131 22 6.9 22H17.033C17.2717 22 17.5006 21.9052 17.6694 21.7364C17.8382 21.5676 17.933 21.3387 17.933 21.1V15H6ZM20 10H19C18.7348 10 18.4804 9.89464 18.2929 9.70711C18.1054 9.51957 18 9.26522 18 9C18 8.73478 18.1054 8.48043 18.2929 8.29289C18.4804 8.10536 18.7348 8 19 8H20C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9C21 9.26522 20.8946 9.51957 20.7071 9.70711C20.5196 9.89464 20.2652 10 20 10Z" fill="#A098AE"/>
                                                                        <path d="M15 18H9C8.73478 18 8.48043 17.8946 8.29289 17.7071C8.10536 17.5196 8 17.2652 8 17C8 16.7348 8.10536 16.4804 8.29289 16.2929C8.48043 16.1054 8.73478 16 9 16H15C15.2652 16 15.5196 16.1054 15.7071 16.2929C15.8946 16.4804 16 16.7348 16 17C16 17.2652 15.8946 17.5196 15.7071 17.7071C15.5196 17.8946 15.2652 18 15 18ZM12 21H9C8.73478 21 8.48043 20.8946 8.29289 20.7071C8.10536 20.5196 8 20.2652 8 20C8 19.7348 8.10536 19.4804 8.29289 19.2929C8.48043 19.1054 8.73478 19 9 19H12C12.2652 19 12.5196 19.1054 12.7071 19.2929C12.8946 19.4804 13 19.7348 13 20C13 20.2652 12.8946 20.5196 12.7071 20.7071C12.5196 20.8946 12.2652 21 12 21Z" fill="#A098AE"/>
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_732_4581">
                                                                        <rect width="24" height="24" fill="white"/>
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                            </Link>
                                                        </td>
                                                        <td className="text-end ps-0">
                                                            <Dropdown className="dropdown">
                                                                <Dropdown.Toggle as="div" className="btn-link btn sharp tp-btn btn-primary pill i-false" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M12.0012 9.35986C11.6543 9.35986 11.3109 9.42818 10.9904 9.56091C10.67 9.69365 10.3788 9.8882 10.1335 10.1335C9.88829 10.3787 9.69374 10.6699 9.56101 10.9903C9.42828 11.3108 9.35996 11.6542 9.35996 12.0011C9.35996 12.3479 9.42828 12.6914 9.56101 13.0118C9.69374 13.3323 9.88829 13.6234 10.1335 13.8687C10.3788 14.1139 10.67 14.3085 10.9904 14.4412C11.3109 14.5739 11.6543 14.6423 12.0012 14.6423C12.7017 14.6421 13.3734 14.3637 13.8686 13.8683C14.3638 13.3728 14.6419 12.701 14.6418 12.0005C14.6416 11.3 14.3632 10.6282 13.8677 10.133C13.3723 9.63782 12.7004 9.3597 12 9.35986H12.0012ZM3.60116 9.35986C3.25431 9.35986 2.91086 9.42818 2.59042 9.56091C2.26997 9.69365 1.97881 9.8882 1.73355 10.1335C1.48829 10.3787 1.29374 10.6699 1.16101 10.9903C1.02828 11.3108 0.959961 11.6542 0.959961 12.0011C0.959961 12.3479 1.02828 12.6914 1.16101 13.0118C1.29374 13.3323 1.48829 13.6234 1.73355 13.8687C1.97881 14.1139 2.26997 14.3085 2.59042 14.4412C2.91086 14.5739 3.25431 14.6423 3.60116 14.6423C4.30165 14.6421 4.97339 14.3637 5.4686 13.8683C5.9638 13.3728 6.24192 12.701 6.24176 12.0005C6.2416 11.3 5.96318 10.6282 5.46775 10.133C4.97231 9.63782 4.30045 9.3597 3.59996 9.35986H3.60116ZM20.4012 9.35986C20.0543 9.35986 19.7109 9.42818 19.3904 9.56091C19.07 9.69365 18.7788 9.8882 18.5336 10.1335C18.2883 10.3787 18.0937 10.6699 17.961 10.9903C17.8283 11.3108 17.76 11.6542 17.76 12.0011C17.76 12.3479 17.8283 12.6914 17.961 13.0118C18.0937 13.3323 18.2883 13.6234 18.5336 13.8687C18.7788 14.1139 19.07 14.3085 19.3904 14.4412C19.7109 14.5739 20.0543 14.6423 20.4012 14.6423C21.1017 14.6421 21.7734 14.3637 22.2686 13.8683C22.7638 13.3728 23.0419 12.701 23.0418 12.0005C23.0416 11.3 22.7632 10.6282 22.2677 10.133C21.7723 9.63782 21.1005 9.3597 20.4 9.35986H20.4012Z" fill="#A098AE"/>
                                                                    </svg>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                                                    <Dropdown.Item>Delete</Dropdown.Item>
                                                                    <Dropdown.Item>Edit</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                ))}
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="table-pagenation d-flex align-items-center">
                                        <p className="mb-0">Showing <span> 1-5 </span> from <span> 100 </span> data </p>
                                        <nav>
                                            <ul className="pagination pagination-gutter pagination-primary no-bg">
                                                <li className="page-item page-indicator">
                                                    <Link to={"#"} className="page-link" >
                                                        <i className="fa-solid fa-angle-left"></i>
                                                    </Link>
                                                </li>
                                                <li className="page-item "><Link to={"#"} className="page-link">1</Link></li>
                                                <li className="page-item active"><Link to={"#"} className="page-link">2</Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link">3</Link></li>
                                                <li className="page-item page-indicator">
                                                    <Link to={"#"} className="page-link" >
                                                        <i className="fa-solid fa-angle-right"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="row">
                        {cardTitle.map((item, ind)=>(
                            <div className="col-xxl-6 col-xl-12 col-md-6" key={ind}>
                                <div className="card">
                                    <div className="card-header border-0 pb-0">
                                        <h2 className="heading mb-0 m-auto">{item.title}</h2>
                                    </div>
                                    <div className="card-body text-center pt-3">
                                        <div className="icon-box bg-primary">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 30H23C24.3261 30 25.5979 29.4732 26.5355 28.5355C27.4732 27.5979 28 26.3261 28 25V19C28 17.6739 27.4732 16.4021 26.5355 15.4645C25.5979 14.5268 24.3261 14 23 14H9C7.67392 14 6.40215 14.5268 5.46447 15.4645C4.52678 16.4021 4 17.6739 4 19V25C4 26.3261 4.52678 27.5979 5.46447 28.5355C6.40215 29.4732 7.67392 30 9 30ZM6 19C6 18.2044 6.31607 17.4413 6.87868 16.8787C7.44129 16.3161 8.20435 16 9 16H23C23.7956 16 24.5587 16.3161 25.1213 16.8787C25.6839 17.4413 26 18.2044 26 19V25C26 25.7956 25.6839 26.5587 25.1213 27.1213C24.5587 27.6839 23.7956 28 23 28H9C8.20435 28 7.44129 27.6839 6.87868 27.1213C6.31607 26.5587 6 25.7956 6 25V19Z" fill="white"/>
                                                <path d="M16 26C16.7912 26 17.5645 25.7654 18.2223 25.3259C18.8801 24.8864 19.3928 24.2616 19.6955 23.5307C19.9983 22.7998 20.0775 21.9956 19.9232 21.2196C19.7688 20.4437 19.3879 19.731 18.8285 19.1716C18.269 18.6122 17.5563 18.2312 16.7804 18.0769C16.0045 17.9225 15.2002 18.0017 14.4693 18.3045C13.7384 18.6072 13.1137 19.1199 12.6741 19.7777C12.2346 20.4355 12 21.2089 12 22C12 23.0609 12.4215 24.0783 13.1716 24.8284C13.9217 25.5786 14.9392 26 16 26ZM16 20C16.3956 20 16.7823 20.1173 17.1112 20.3371C17.4401 20.5568 17.6964 20.8692 17.8478 21.2346C17.9992 21.6001 18.0388 22.0022 17.9616 22.3902C17.8844 22.7781 17.6939 23.1345 17.4142 23.4142C17.1345 23.6939 16.7782 23.8844 16.3902 23.9616C16.0022 24.0387 15.6001 23.9991 15.2347 23.8478C14.8692 23.6964 14.5569 23.44 14.3371 23.1111C14.1173 22.7822 14 22.3956 14 22C14 21.4696 14.2107 20.9609 14.5858 20.5858C14.9609 20.2107 15.4696 20 16 20ZM16 2C15.7348 2 15.4805 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V8.59L12.46 6.05C12.2687 5.88617 12.0227 5.80057 11.771 5.81029C11.5193 5.82001 11.2806 5.92434 11.1025 6.10244C10.9244 6.28053 10.82 6.51927 10.8103 6.77095C10.8006 7.02262 10.8862 7.2687 11.05 7.46L15.29 11.71C15.3822 11.8 15.4908 11.8713 15.61 11.92C15.7334 11.9723 15.866 11.9992 16 11.9992C16.134 11.9992 16.2666 11.9723 16.39 11.92C16.5092 11.8713 16.6179 11.8 16.71 11.71L21 7.46C21.1639 7.2687 21.2495 7.02262 21.2397 6.77095C21.23 6.51927 21.1257 6.28053 20.9476 6.10244C20.7695 5.92434 20.5308 5.82001 20.2791 5.81029C20.0274 5.80057 19.7813 5.88617 19.59 6.05L17 8.59V3C17 2.73478 16.8947 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2Z" fill="white"/>
                                            </svg>
                                        </div>
                                        <div className="mt-3">Last Month</div>
                                        <div className="count-num mt-1">$23,741.60</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="col-xl-12 col-lg-6 col-md-12">
                            <div className="card">
                                <div className="card-header border-0 pb-0">
                                    <h2 className="heading mb-0">Earning Categories</h2>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex mb-3">
                                        <div className="icon-box bg-primary me-2 ">
                                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.0038 25.4285C11.7434 25.4285 9.53382 24.7582 7.6544 23.5024C5.77498 22.2466 4.31015 20.4617 3.44515 18.3734C2.58015 16.2851 2.35382 13.9872 2.7948 11.7703C3.23577 9.55337 4.32424 7.51699 5.92255 5.91868C7.52087 4.32036 9.55724 3.2319 11.7742 2.79092C13.9911 2.34995 16.289 2.57627 18.3773 3.44127C20.4656 4.30627 22.2505 5.7711 23.5063 7.65052C24.7621 9.52994 25.4323 11.7395 25.4323 13.9999C25.429 17.0299 24.2239 19.9349 22.0813 22.0774C19.9388 24.22 17.0338 25.4251 14.0038 25.4285ZM14.0038 4.85704C12.1955 4.85704 10.4278 5.39326 8.92427 6.39789C7.42074 7.40252 6.24887 8.83044 5.55687 10.5011C4.86487 12.1717 4.68381 14.01 5.03659 15.7836C5.38937 17.5571 6.26014 19.1862 7.5388 20.4649C8.81745 21.7435 10.4465 22.6143 12.2201 22.9671C13.9936 23.3199 15.832 23.1388 17.5026 22.4468C19.1732 21.7548 20.6011 20.5829 21.6058 19.0794C22.6104 17.5759 23.1466 15.8082 23.1466 13.9999C23.1439 11.5759 22.1798 9.25196 20.4657 7.53793C18.7517 5.8239 16.4278 4.85976 14.0038 4.85704Z" fill="#FCFCFC"></path>
                                                <path d="M15.1466 18.5714H11.7181C11.4149 18.5714 11.1243 18.451 10.9099 18.2367C10.6956 18.0224 10.5752 17.7317 10.5752 17.4286C10.5752 17.1255 10.6956 16.8348 10.9099 16.6204C11.1243 16.4061 11.4149 16.2857 11.7181 16.2857H15.1466V15.1428H12.8609C12.2547 15.1428 11.6733 14.902 11.2447 14.4734C10.816 14.0447 10.5752 13.4633 10.5752 12.8571V11.7143C10.5752 11.1081 10.816 10.5267 11.2447 10.098C11.6733 9.66937 12.2547 9.42856 12.8609 9.42856H16.2895C16.5926 9.42856 16.8833 9.54897 17.0976 9.76329C17.3119 9.97762 17.4323 10.2683 17.4323 10.5714C17.4323 10.8745 17.3119 11.1652 17.0976 11.3795C16.8833 11.5939 16.5926 11.7143 16.2895 11.7143H12.8609V12.8571H15.1466C15.7528 12.8571 16.3342 13.0979 16.7629 13.5266C17.1915 13.9553 17.4323 14.5366 17.4323 15.1428V16.2857C17.4323 16.8919 17.1915 17.4733 16.7629 17.9019C16.3342 18.3306 15.7528 18.5714 15.1466 18.5714Z" fill="#FCFCFC"></path>
                                                <path d="M14.0032 11.7142C13.7001 11.7142 13.4094 11.5937 13.1951 11.3794C12.9808 11.1651 12.8604 10.8744 12.8604 10.5713V9.42844C12.8604 9.12534 12.9808 8.83465 13.1951 8.62032C13.4094 8.40599 13.7001 8.28558 14.0032 8.28558C14.3063 8.28558 14.597 8.40599 14.8113 8.62032C15.0257 8.83465 15.1461 9.12534 15.1461 9.42844V10.5713C15.1461 10.8744 15.0257 11.1651 14.8113 11.3794C14.597 11.5937 14.3063 11.7142 14.0032 11.7142ZM14.0032 19.7142C13.7001 19.7142 13.4094 19.5937 13.1951 19.3794C12.9808 19.1651 12.8604 18.8744 12.8604 18.5713V17.4284C12.8604 17.1253 12.9808 16.8346 13.1951 16.6203C13.4094 16.406 13.7001 16.2856 14.0032 16.2856C14.3063 16.2856 14.597 16.406 14.8113 16.6203C15.0257 16.8346 15.1461 17.1253 15.1461 17.4284V18.5713C15.1461 18.8744 15.0257 19.1651 14.8113 19.3794C14.597 19.5937 14.3063 19.7142 14.0032 19.7142Z" fill="#FCFCFC"></path>
                                            </svg>
                                        </div>
                                        <div className="ps-2 w-100 flex-1">
                                            <h6 className="">Working Hard</h6>
                                            <div className="progress mt-2">
                                                <div className="progress-bar bg-primary" style={{width:"50%"}}></div>
                                            </div>
                                            <div className="mt-2"><span>$50</span><span className="text-primary"> / from $1000</span></div>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <div className="icon-box bg-secondary me-2">
                                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.0038 25.4285C11.7434 25.4285 9.53382 24.7582 7.6544 23.5024C5.77498 22.2466 4.31015 20.4617 3.44515 18.3734C2.58015 16.2851 2.35382 13.9872 2.7948 11.7703C3.23577 9.55337 4.32424 7.51699 5.92255 5.91868C7.52087 4.32036 9.55724 3.2319 11.7742 2.79092C13.9911 2.34995 16.289 2.57627 18.3773 3.44127C20.4656 4.30627 22.2505 5.7711 23.5063 7.65052C24.7621 9.52994 25.4323 11.7395 25.4323 13.9999C25.429 17.0299 24.2239 19.9349 22.0813 22.0774C19.9388 24.22 17.0338 25.4251 14.0038 25.4285ZM14.0038 4.85704C12.1955 4.85704 10.4278 5.39326 8.92427 6.39789C7.42074 7.40252 6.24887 8.83044 5.55687 10.5011C4.86487 12.1717 4.68381 14.01 5.03659 15.7836C5.38937 17.5571 6.26014 19.1862 7.5388 20.4649C8.81745 21.7435 10.4465 22.6143 12.2201 22.9671C13.9936 23.3199 15.832 23.1388 17.5026 22.4468C19.1732 21.7548 20.6011 20.5829 21.6058 19.0794C22.6104 17.5759 23.1466 15.8082 23.1466 13.9999C23.1439 11.5759 22.1798 9.25196 20.4657 7.53793C18.7517 5.8239 16.4278 4.85976 14.0038 4.85704Z" fill="#FCFCFC"></path>
                                                <path d="M15.1466 18.5714H11.7181C11.4149 18.5714 11.1243 18.451 10.9099 18.2367C10.6956 18.0224 10.5752 17.7317 10.5752 17.4286C10.5752 17.1255 10.6956 16.8348 10.9099 16.6204C11.1243 16.4061 11.4149 16.2857 11.7181 16.2857H15.1466V15.1428H12.8609C12.2547 15.1428 11.6733 14.902 11.2447 14.4734C10.816 14.0447 10.5752 13.4633 10.5752 12.8571V11.7143C10.5752 11.1081 10.816 10.5267 11.2447 10.098C11.6733 9.66937 12.2547 9.42856 12.8609 9.42856H16.2895C16.5926 9.42856 16.8833 9.54897 17.0976 9.76329C17.3119 9.97762 17.4323 10.2683 17.4323 10.5714C17.4323 10.8745 17.3119 11.1652 17.0976 11.3795C16.8833 11.5939 16.5926 11.7143 16.2895 11.7143H12.8609V12.8571H15.1466C15.7528 12.8571 16.3342 13.0979 16.7629 13.5266C17.1915 13.9553 17.4323 14.5366 17.4323 15.1428V16.2857C17.4323 16.8919 17.1915 17.4733 16.7629 17.9019C16.3342 18.3306 15.7528 18.5714 15.1466 18.5714Z" fill="#FCFCFC"></path>
                                                <path d="M14.0032 11.7142C13.7001 11.7142 13.4094 11.5937 13.1951 11.3794C12.9808 11.1651 12.8604 10.8744 12.8604 10.5713V9.42844C12.8604 9.12534 12.9808 8.83465 13.1951 8.62032C13.4094 8.40599 13.7001 8.28558 14.0032 8.28558C14.3063 8.28558 14.597 8.40599 14.8113 8.62032C15.0257 8.83465 15.1461 9.12534 15.1461 9.42844V10.5713C15.1461 10.8744 15.0257 11.1651 14.8113 11.3794C14.597 11.5937 14.3063 11.7142 14.0032 11.7142ZM14.0032 19.7142C13.7001 19.7142 13.4094 19.5937 13.1951 19.3794C12.9808 19.1651 12.8604 18.8744 12.8604 18.5713V17.4284C12.8604 17.1253 12.9808 16.8346 13.1951 16.6203C13.4094 16.406 13.7001 16.2856 14.0032 16.2856C14.3063 16.2856 14.597 16.406 14.8113 16.6203C15.0257 16.8346 15.1461 17.1253 15.1461 17.4284V18.5713C15.1461 18.8744 15.0257 19.1651 14.8113 19.3794C14.597 19.5937 14.3063 19.7142 14.0032 19.7142Z" fill="#FCFCFC"></path>
                                            </svg>
                                        </div>
                                        <div className="ps-2 w-100 flex-1">
                                            <h6 className="">Side Project</h6>
                                            <div className="progress mt-2">
                                                <div className="progress-bar bg-secondary" style={{width:"40%"}}></div>
                                            </div>
                                            <div className="mt-2"><span>$50</span><span className="text-primary"> / from $1000</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-6 col-md-12">
                            <div className="card bg-primary">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h3 className="text-white">Monthly Target</h3>
                                            <h6 className="text-white mt-4" >Total Earning</h6>
                                            <div className="count-num text-white">$25,365.25</div>
                                            <p className="text-white mt-3">25% than last month</p>
                                        </div>
                                        <div className="d-inline-block position-relative donut-chart-sale">                                            
                                            <TargetDonutChart value="75" backgroundColor="rgba(54, 36, 101, 1)"
                                                backgroundColor2= "rgba(239, 239, 239, 1)"
                                            />
                                            <small className="fs-28 font-w700 text-white">75%</small> 
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Banking;