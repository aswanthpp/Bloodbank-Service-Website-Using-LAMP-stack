# Blood Bank Service Portal

A web service Portal for blood bank Service as part of DBMS LAB(CO303) project <br>
Implemented using MySQL,PHP,JavaSceipt and HTML

## Team : <br>

 Arvind Ramachandran 15CO111<br>
 Aswanth P P 15CO112

## AIM:<br>

 Make blood donor available to the victims as faster<br>
Make a blood donation faster at easier by providing nearest donors and blooad bank to the victims can save life!!!


## Installation :<br>

### Windows :<br> 
	
		1. Download and Install WampServer
		2. Download source code and Move the sourcecode to "C:\wamp64\www\"
		3. Launch "localhost/phpmyadmin" in browser with username :"root" and password : ""  (Default)
		4. Import db_bloodbank.sql to phpmyadmin 
		5. Launch localhost/bloodbank
	
	
	
### Ubuntu :<br>
	
1. Download and Install LAMP (https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-16-04)
<br>
2.After installing LAMP and phpMyAdmin in Ubuntu, do the following:<br>

	
	2.1. To put files in /var/www/html you need root permission. For that set the root password(if already not set):
		sudo passwd root

		Now login as root:
		su root

		Give permission to the folder:>
		<code>sudo chmod 755 -R /var/www/html </code>
               		or 
		<code>sudo chmod 755 /var/www/html  </code>


	2.2 	su root
		cd /etc/apache2
		nano apache2.conf
		
		Change the below code:
   		
		<Directory /var/www/>
     		Options Indexes FollowSymLinks
     		AllowOverride None
     		Require all granted
		</Directory>
		
              	as:<br>
		
		<Directory /var/www/>
     		Options Indexes FollowSymLinks
     		AllowOverride All
     		Require all granted
		</Directory>
		


	2.3 	Enable rewrite mode: <br>
		sudo a2enmod rewrite

	2.4 	Restart apache server:<br>
		sudo service apache2 restart


3  Download the sourcecode and move it to "/var/www/html/" <br>
4. Launch "localhost/phpmyadmin" in browser  import db_bloodbank.sql from extracted file to phpmyadmin <br>
5. Launch "localhost/bloodbank" in broswer <br>
   





