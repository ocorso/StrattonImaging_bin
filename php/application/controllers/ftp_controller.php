<?php

class Ftp_controller extends Controller {

	var $_helpers = array(
		'url',
		'asset'
	);
	
	var $basePath = "/";
	
	function Ftp_controller()
	{
		parent::Controller();
		
		$this->load->library('ftp');
		//$this->output->enable_profiler(TRUE);

	}//end function
	
	function login(){
		//take user creds
		//check login, 
		//verify login username and password returns a path
		//when it does, return name and email to display in flash
		
		//asychronously retrieve ftp directory. green/red indicator in view.
		
		$this->load->model('Ftp_Model');
		$d = $this->input->post('d');
		$jArr = json_decode(base64_decode($d), true);
		
		
		$d = base64_encode(json_encode($this->Ftp_Model->checkLogin($jArr['u'],$jArr['p'])));
		
		$data['response'] = $d;
		
		$this->load->view('ftp/login_response', $data);
				
	}//end function	
	
	function get_directory() {
		$d = $this->input->post('d');
		$jArr = json_decode(base64_decode($d), true);
		
		$currentPath = $jArr['p'];
		$this->_openConnection();
		
		$list = $this->ftp->list_files($currentPath);

/*
   return array(		'folders' =>$folders,
        				'links'=>$links,
        				'files'=>$files
        			);
*/
		
		$files = array();
		
		foreach($list['folders'] as $item)
			$files[] =	array ("Name"=>$item['name'], "Date"=>$item['time'], "Size"=>$item['size'], "Type"=>"folder");			
		foreach($list['files'] as $item)
			$files[] =	array ("Name"=>$item['name'], "Date"=>$item['time'], "Size"=>$item['size'], "Type"=>"file");	
			
		$data = array(
			'files' => json_encode($files)
		);
		$this->ftp->close(); 
		$this->load->view('ftp/get_directory', $data);

	}//end function
	
	function upload(){
		
		$MAXIMUM_FILESIZE = 1024 * 1024 * 191; // 191MB
		
		//make sure we have the data
		if (isset($_FILES['ored_data']) ) {
			//make sure its small enough
			if ($_FILES['ored_data']['size'] <= $MAXIMUM_FILESIZE ){
				
				//setup vars
				/* Set the upload directory */
				$upload_dir = "./strattonftp/".$this->input->post('dir');
				print_r($this->input->post('dir'));
				/* PHP temp_name variable for file upload */
				$temp_name = $_FILES['ored_data']['tmp_name'];
				
				/* PHP file_name variable sent from Flex */
				$file_name = $_FILES['ored_data']['name'];
				 
				/* PHP file_size variable sent from Flex */
				$file_size = $_FILES['ored_data']['size'];
				
				/* PHP file_type variable sent from Flex */
				$file_type = $_FILES['ored_data']['type'];
				
				/* Set the file_url to the hosturl and the updload directory and filename */
				$file_url = $_SERVER['HTTP_HOST'] . $upload_dir . $file_name;
				
				/* Replace any computer garbage  */
				$file_name = str_replace("\\","",$file_name);
				
				/* Replace any garbage */
				$file_name = str_replace("'","",$file_name);
				
				/* Set up the filepath */
				$file_path = $upload_dir.$file_name;
					    move_uploaded_file($_FILES['ored_data']['tmp_name'], "./php/temp/".$_FILES['ored_data']['name']);
				        rename("./php/temp/".$_FILES['ored_data']['name'], "./strattonftp/".$_FILES['ored_data']['name']);
			}//end if
			$directory = opendir('./strattonftp/');
			$files = array();
			while ($file = readdir($directory))
			{
			    array_push($files, array('./strattonftp/'.$file, filectime('./strattonftp/'.$file)));
			}
			print_r($files);
			closedir($directory);
	
					
		
		}//end if we have anypost data
		else{ print_r("no correct post data");}
		
	}//end function

	function _openConnection() {
			
		//here is some ftp stuff
		
		//uncomment this for deploy
		//$config['hostname'] = 'localhost';
		
		//uncomment this for production
		$config['hostname'] = 'www.strattonimaging.com';
		$config['username'] = 'codeigniter';
		$config['password'] = 'h@ckp40F';
		$config['debug'] = FALSE;
		
		$this->ftp->connect($config);	
	}//end function
	
}//end class


?>