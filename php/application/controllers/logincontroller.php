<?php

class LoginController extends Controller {


	
	
	function LoginController()
	{
		parent::Controller();

	}//end function

	function index(){
		$this->load->view('site/login');
	}//end function login
	
}//end class

/* End of file jquery.php */
/* Location: ./php/application/controllers/jquery.php */