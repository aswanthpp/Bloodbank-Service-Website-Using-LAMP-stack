### Blood Bank Service Portal

A web service Portal for blood bank Service as part of DBMS LAB(CO303) project
Implemented using MySQL,PHP,JavaSceipt and HTML


Installation :


PreRequsites :
	Windows : 
		1. Download and Install WampServer
		2. Download source code and Move the sourcecode to "C:\wamp64\www\"
		3. Launch "localhost/phpmyadmin" in browser with username :"root" and password : ""  (Default)
		4. Import db_bloodbank.sql to phpmyadmin 
		5. Launch localhost/bloodbank
	Ubuntu :
1. Download and Install LAMP (https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-16-04)
2.After installing LAMP and phpMyAdmin in Ubuntu, do the following:
	<div>
	2.1. To put files in /var/www/html you need root permission. For that set the root password(if already not set):
		sudo passwd root

		Now login as root:
		2.1.1. su root

		Give permission to the folder:
		2.1.2. sudo chmod 755 -R /var/www/html
               		or
		2.1.2. sudo chmod 755 /var/www/html

</div>
<div>
	2.2 	
		2.2.1. su root
		2.2.2. cd /etc/apache2
		2.2.3. nano apache2.conf
<br>
		Change the below code:
   <br>
		 <Directory /var/www/>
     		Options Indexes FollowSymLinks
     		AllowOverride None
     		Require all granted
		</Directory>
		<br>

              	as:
<br>
		<Directory /var/www/>
     		Options Indexes FollowSymLinks
     		AllowOverride All
     		Require all granted
		</Directory>
		<br>
</div>
<div>

	2.3. 	Enable rewrite mode:
		2.3.1.  sudo a2enmod rewrite
</div>
<div>
	2.4 	Restart apache server:
		2.4.1 sudo service apache2 restart
</div>


3  Download the sourcecode and move it to "/var/www/html/"
4. Launch "localhost/phpmyadmin" in browser  import db_bloodbank.sql from extracted file to phpmyadmin
5. Launch "localhost/bloodbank" in broswer 
   

   
   
   





   
		

Team :

Arvind Ramachandran 15CO111
Aswanth P P 15CO112




