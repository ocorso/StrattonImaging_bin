<?php

class Home extends Controller {


	
	
	function Home()
	{
		parent::Controller();
			
	}
	
	function index()
	{
		
		/*$data = array();
		$data['isMobile'] = $this->agent->is_mobile();
		$data['baseUrl'] = $this->SiteModel->getBaseUrl();
		$data['xml'] = $this->SiteModel->getXML();*/
		
		$this->load->view('header');
		$this->load->view('home_view');	
		/* $this->load->view('footer'); */
		
	}
}

/* End of file home.php */
/* Location: ./php/application/controllers/home.php */