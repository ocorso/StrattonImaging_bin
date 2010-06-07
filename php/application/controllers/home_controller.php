<?php

class Home_controller extends Controller {


	
	
	function Home_controller()
	{
		parent::Controller();
			
	}
	
	function index()
	{

		$this->load->view('site/header_view');
		$this->load->view('site/home_view');	
		
		
	}
}

/* End of file home.php */
/* Location: ./php/application/controllers/home.php */