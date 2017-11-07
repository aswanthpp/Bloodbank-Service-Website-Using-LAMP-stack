-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 07, 2017 at 08:09 PM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_blood_bank`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_blood_group`
--

CREATE TABLE `tbl_blood_group` (
  `bid` int(11) NOT NULL,
  `blood_group` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_blood_group`
--

INSERT INTO `tbl_blood_group` (`bid`, `blood_group`) VALUES
(1, 'A positive'),
(2, 'A negative'),
(3, 'B positive'),
(4, 'B negative'),
(5, 'AB positive'),
(6, 'AB negative'),
(7, 'O positive'),
(8, 'O negative');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_district`
--

CREATE TABLE `tbl_district` (
  `district_id` int(11) NOT NULL,
  `state_id` int(11) NOT NULL,
  `district_name` varchar(40) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_district`
--

INSERT INTO `tbl_district` (`district_id`, `state_id`, `district_name`) VALUES
(1, 2, 'KASARGOD'),
(2, 2, 'KANNUR'),
(3, 2, 'KOZHIKKODE'),
(4, 2, 'WAYANAD'),
(5, 2, 'MALAPPURAM'),
(6, 2, 'THRISSUR'),
(7, 2, 'PALAKKAD'),
(8, 2, 'ERNAKULAM'),
(9, 2, 'ALAPPUZHA'),
(10, 2, 'KOTTAYAM'),
(11, 2, 'IDUKKI'),
(12, 2, 'PATHANAMTHITTA'),
(13, 2, 'KOLLAM'),
(14, 2, 'THIRUVANATHAPURAM'),
(15, 1, 'MANGALORE'),
(16, 1, 'DAKSHINA KANNADA'),
(17, 1, 'UDUPPI'),
(18, 1, 'BANGALURU'),
(19, 1, 'KODAG'),
(20, 1, 'BALLARI'),
(21, 3, 'SALEM'),
(22, 3, 'CHENNAI'),
(23, 3, 'ERODE');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_donor`
--

CREATE TABLE `tbl_donor` (
  `did` int(11) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `district` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `mobile` text,
  `email` varchar(30) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_donor`
--

INSERT INTO `tbl_donor` (`did`, `username`, `password`, `name`, `city`, `district`, `state`, `mobile`, `email`) VALUES
(1, 'aswanthpp', '123456', 'Aswanth P P', 'Surathkal', 16, 1, '9562978698', 'abc@gmail.com'),
(2, 'arvind', 'arvind', 'Arvind Ramachandran', 'Thampanoor', 14, 2, '8547462771', 'arvind@gmail.com'),
(3, 'vikky', 'vikky', 'Vigneswar', 'Munderi', 2, 2, '9456725310', 'vigneswar@gmail.com'),
(4, 'joe', 'joe123', 'Joe Antony', 'Vytila', 8, 2, '8945672315', 'joe@gmail.com'),
(5, 'akshay', 'akshay', 'Akshay Krishna', 'Payyannur', 2, 2, '7896542503', 'akshay@gmail.com'),
(6, 'Ajnas', 'ajnas', 'Ajnas F', 'Ponnani', 5, 2, '9658745623', 'ajnas@gmail.com'),
(7, 'vigneswar', 'abc', 'Vigneswar O V', 'Irikkur', 3, 2, '7567891230', 'ppaswanth3@gmail.com'),
(8, 'Saneens', 'abcd', 'Muhammed Saneens', 'Chakkarakkallu', 2, 2, '9446798655', 'saneens@gmail.com'),
(9, 'ameen', '123456', 'Mohammed Ameen', 'Mangalore', 15, 1, '9765482315', 'ameen@gmail.com'),
(10, 'aswanthpp1', 'qwerty', 'Aswanth P P', 'Mangalore', 15, 1, '9865432107', 'pp@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_donor_health`
--

CREATE TABLE `tbl_donor_health` (
  `did` int(11) NOT NULL,
  `dob` date DEFAULT NULL,
  `blood_group` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `last_donated_date` date DEFAULT NULL,
  `gender` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_donor_health`
--

INSERT INTO `tbl_donor_health` (`did`, `dob`, `blood_group`, `height`, `weight`, `last_donated_date`, `gender`) VALUES
(1, '1996-12-03', 7, 180, 100, '2017-11-01', 1),
(2, '1997-05-12', 5, 180, 55, '2017-05-16', 1),
(3, '1997-01-26', 3, 183, 70, '2017-05-16', 1),
(4, '1997-05-12', 3, 170, 65, '2017-05-12', 1),
(5, '1996-04-03', 7, 165, 75, '2017-11-01', 1),
(6, '1996-12-12', 2, 170, 100, '2017-06-15', 1),
(7, '1997-01-28', 3, 180, 85, '2017-11-01', 1),
(8, '1997-01-15', 3, 190, 90, '2017-01-10', 1),
(9, '1997-06-03', 4, 160, 70, '2017-11-02', 1),
(10, '1996-12-02', 3, 123, 145, '2017-11-15', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_gender`
--

CREATE TABLE `tbl_gender` (
  `gid` int(11) NOT NULL,
  `gender_name` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_gender`
--

INSERT INTO `tbl_gender` (`gid`, `gender_name`) VALUES
(1, 'Male'),
(2, 'Female'),
(3, 'Other');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_organization`
--

CREATE TABLE `tbl_organization` (
  `org_id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `org_name` text NOT NULL,
  `manager_name` text NOT NULL,
  `A_positive` int(11) NOT NULL,
  `A_negative` int(11) NOT NULL,
  `B_positive` int(11) NOT NULL,
  `B_negative` int(11) NOT NULL,
  `AB_positive` int(11) NOT NULL,
  `AB_negative` int(11) NOT NULL,
  `O_positive` int(11) NOT NULL,
  `O_negative` int(11) NOT NULL,
  `city` text NOT NULL,
  `district` int(11) NOT NULL,
  `state` int(11) NOT NULL,
  `mobile` text NOT NULL,
  `email` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_organization`
--

INSERT INTO `tbl_organization` (`org_id`, `username`, `password`, `org_name`, `manager_name`, `A_positive`, `A_negative`, `B_positive`, `B_negative`, `AB_positive`, `AB_negative`, `O_positive`, `O_negative`, `city`, `district`, `state`, `mobile`, `email`) VALUES
(1, 'abcgroup', '123456', 'ABC Blood Bank', 'John', 671, 856, 420, 100, 658, 400, 1000, 450, 'Payyannur', 2, 2, '9876541230', 'abcbloodbank@gmail.com'),
(2, 'kiwis', '123456', 'Kiwis Club', 'Jones', 687, 495, 784, 265, 689, 456, 487, 285, 'Mangalore', 15, 1, '9685742315', 'jones@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_request_log`
--

CREATE TABLE `tbl_request_log` (
  `pid` int(11) NOT NULL,
  `patient_name` varchar(20) NOT NULL,
  `hospital_name` varchar(20) NOT NULL,
  `mobile` text,
  `blood_group` int(11) NOT NULL,
  `district` int(11) NOT NULL,
  `state` int(11) NOT NULL,
  `req_date` date DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_request_log`
--

INSERT INTO `tbl_request_log` (`pid`, `patient_name`, `hospital_name`, `mobile`, `blood_group`, `district`, `state`, `req_date`) VALUES
(1, 'A Krishnan', 'Govt Hospital Kannur', '9745419355', 7, 2, 2, '2017-10-31'),
(2, 'P K Hari', 'AKG Kannur', '9496678912', 7, 2, 2, '2017-10-31'),
(3, 'P K Hari', 'AKG Kannur', '9496678912', 7, 2, 2, '2017-10-31'),
(4, 'A M George', 'Govt Hospital Kannur', '9567812334', 7, 2, 2, '2017-11-01'),
(5, 'Peter', 'JSS Calicut', '9687456132', 3, 3, 2, '2017-11-01'),
(6, 'William', 'General Hospital', '9687456123', 7, 2, 2, '2017-11-01'),
(7, 'Sachin', 'MIMS', '9647856213', 3, 2, 2, '2017-11-01'),
(8, 'Peter', 'A J Hospital', '9769856321', 3, 2, 2, '2017-11-01'),
(9, 'William', 'A J MAngalore', '7896548415', 4, 15, 1, '2017-11-01'),
(10, 'Krishna', 'Govt Hospital Kannur', '9562147896', 7, 2, 2, '2017-11-01'),
(11, 'John', 'A J Mangalore', '9745136694', 6, 15, 1, '2017-11-01'),
(12, 'John', 'A J Mangalore', '9745136694', 4, 15, 1, '2017-11-01'),
(13, 'Peter', 'A J Hospital', '9568745612', 4, 15, 1, '2017-11-01'),
(14, 'Peter', 'A J Mangalore', '9565469447', 4, 15, 1, '2017-11-02'),
(15, 'A Mathew', 'AKG Kannur Hospital', '9456321578', 7, 2, 2, '2017-11-04');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_state`
--

CREATE TABLE `tbl_state` (
  `state_id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_state`
--

INSERT INTO `tbl_state` (`state_id`, `name`) VALUES
(1, 'KARNATAKA'),
(2, 'KERALA'),
(3, 'TAMILNADU');

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_donor`
-- (See below for the actual view)
--
CREATE TABLE `vw_donor` (
`did` int(11)
,`name` varchar(20)
,`city` varchar(20)
,`district` int(11)
,`state` int(11)
,`mobile` text
,`email` varchar(30)
,`dob` date
,`blood_group` int(11)
,`height` int(11)
,`weight` int(11)
,`last_donated_date` date
,`gender` int(11)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_donordetails`
-- (See below for the actual view)
--
CREATE TABLE `vw_donordetails` (
`did` int(11)
,`username` varchar(20)
,`password` varchar(20)
,`name` varchar(20)
,`gender` int(11)
,`dob` date
,`blood_group` int(11)
,`last_donated_date` date
,`height` int(11)
,`weight` int(11)
,`city` varchar(20)
,`state` int(11)
,`district` int(11)
,`mobile` text
,`email` varchar(30)
);

-- --------------------------------------------------------

--
-- Structure for view `vw_donor`
--
DROP TABLE IF EXISTS `vw_donor`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_donor`  AS  select `a`.`did` AS `did`,`a`.`name` AS `name`,`a`.`city` AS `city`,`a`.`district` AS `district`,`a`.`state` AS `state`,`a`.`mobile` AS `mobile`,`a`.`email` AS `email`,`b`.`dob` AS `dob`,`b`.`blood_group` AS `blood_group`,`b`.`height` AS `height`,`b`.`weight` AS `weight`,`b`.`last_donated_date` AS `last_donated_date`,`b`.`gender` AS `gender` from (`tbl_donor` `a` left join `tbl_donor_health` `b` on((`a`.`did` = `b`.`did`))) ;

-- --------------------------------------------------------

--
-- Structure for view `vw_donordetails`
--
DROP TABLE IF EXISTS `vw_donordetails`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_donordetails`  AS  select `a`.`did` AS `did`,`a`.`username` AS `username`,`a`.`password` AS `password`,`a`.`name` AS `name`,`b`.`gender` AS `gender`,`b`.`dob` AS `dob`,`b`.`blood_group` AS `blood_group`,`b`.`last_donated_date` AS `last_donated_date`,`b`.`height` AS `height`,`b`.`weight` AS `weight`,`a`.`city` AS `city`,`a`.`state` AS `state`,`a`.`district` AS `district`,`a`.`mobile` AS `mobile`,`a`.`email` AS `email` from (`tbl_donor` `a` left join `tbl_donor_health` `b` on((`a`.`did` = `b`.`did`))) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_blood_group`
--
ALTER TABLE `tbl_blood_group`
  ADD PRIMARY KEY (`bid`);

--
-- Indexes for table `tbl_district`
--
ALTER TABLE `tbl_district`
  ADD PRIMARY KEY (`district_id`);

--
-- Indexes for table `tbl_donor`
--
ALTER TABLE `tbl_donor`
  ADD PRIMARY KEY (`did`);

--
-- Indexes for table `tbl_donor_health`
--
ALTER TABLE `tbl_donor_health`
  ADD PRIMARY KEY (`did`);

--
-- Indexes for table `tbl_gender`
--
ALTER TABLE `tbl_gender`
  ADD PRIMARY KEY (`gid`);

--
-- Indexes for table `tbl_organization`
--
ALTER TABLE `tbl_organization`
  ADD PRIMARY KEY (`org_id`);

--
-- Indexes for table `tbl_request_log`
--
ALTER TABLE `tbl_request_log`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `tbl_state`
--
ALTER TABLE `tbl_state`
  ADD PRIMARY KEY (`state_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_district`
--
ALTER TABLE `tbl_district`
  MODIFY `district_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `tbl_donor`
--
ALTER TABLE `tbl_donor`
  MODIFY `did` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `tbl_donor_health`
--
ALTER TABLE `tbl_donor_health`
  MODIFY `did` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `tbl_gender`
--
ALTER TABLE `tbl_gender`
  MODIFY `gid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `tbl_organization`
--
ALTER TABLE `tbl_organization`
  MODIFY `org_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tbl_request_log`
--
ALTER TABLE `tbl_request_log`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
