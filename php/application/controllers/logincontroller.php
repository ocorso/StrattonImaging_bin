<?php

class LoginController extends Controller {


	
	
	function LoginController()
	{
		parent::Controller();

	}//end function
	
	function index()
	{

		$this->load->model('User_Model');
		$data['success'] = $this->User_Model->get_login($this->input->post('username'), $this->input->post('password'));
		$this->load->view('site/response', $data);
		
	}//end function
	
	function login(){
		$this->load->view('site/login');
	}//end function login
	
}//end class

/* End of file jquery.php */
/* Location: ./php/application/controllers/jquery.php */