<?php

class FtpController extends Controller {

	var $_helpers = array(
		'url',
		'asset'
	);
	
	var $basePath = "/htdocs/ftpuser/";
	function FtpController()
	{
		parent::Controller();
		
		$this->load->library('ftp');
		
		//$this->output->enable_profiler(TRUE);
	}//end function
		
	function get_list() {
		//toDO: have flash send the path as a post variable
		//if($$this->input->path) $basePath = $$this->input->path;
		
		$this->_openConnection();
		
		$list = $this->ftp->list_files($this->basePath);
		$i = 0;
		$files = array();
		foreach($list as $file){
			$filename =  $file;
			$name = explode($this->basePath, $filename);
			
			$size = $this->ftp->getSize($filename);
			$date = $this->ftp->getModDate($filename);
			
			$files[$i] = array(	'name'			=> $name[1], 
								'size'			=>$size, 
								'date_modified'	=>$date
								
			);
			$i++;
		}

		$data = array(
			'files' => $files
		);
		$this->ftp->close(); 
		$this->load->view('ftp/get_list_view', $data);

	}//end function
	
	function _openConnection() {
			
		//here is some ftp stuff
		
		//uncomment this for deploy
		//$config['hostname'] = 'localhost';
		
		//uncomment this for production
		$config['hostname'] = 'www.strattonimaging.com';
		$config['username'] = 'ocorso%02a11c5';
		$config['password'] = 'Vamp5near';
		$config['debug'] = TRUE;
		
		$this->ftp->connect($config);
		
		
	}//end function
	
	/**
	 * Converts human readable file size (e.g. 10 MB, 200.20 GB) into bytes.
	 *
	 * @param string $str
	 * @return int the result is in bytes
	 * @author Svetoslav Marinov
	 * @author http://slavi.biz
	 */
	function filesize2bytes($str) {
	    $bytes = 0;

	    $bytes_array = array(
	        'B' => 1,
	        'KB' => 1024,
	        'MB' => 1024 * 1024,
	        'GB' => 1024 * 1024 * 1024,
	        'TB' => 1024 * 1024 * 1024 * 1024,
	        'PB' => 1024 * 1024 * 1024 * 1024 * 1024,
	    );

	    $bytes = floatval($str);

	    if (preg_match('#([KMGTP]?B)$#si', $str, $matches) && !empty($bytes_array[$matches[1]])) {
	        $bytes *= $bytes_array[$matches[1]];
	    }

	    $bytes = intval(round($bytes, 2));

	    return $bytes;
	}

}//end class


?>