<?php

class JQuery extends Controller {


	
	
	function JQuery()
	{
		parent::Controller();
			
	}//end function
	
	function index()
	{
		$this->load->view('ajax');
		
	}//end function

	function response()
	{
		$this->load->view('result');
	}
}//end class

/* End of file jquery.php */
/* Location: ./php/application/controllers/jquery.php */