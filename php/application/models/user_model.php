<?php 

class User_Model extends Model {

    function User_Model()
    {
        // Call the Model constructor
        parent::Model();
    }
    
    function get_login($usn, $pwd)
    {
	    $this->load->database();
    	$this->db->from('Users');
    	$this->db->where('username', $usn);
    	$this->db->where('password', $pwd);
        $query 		= $this->db->get();
        $result 	= $query->result_array();
        $response 	= (isset($result[0]['id'])) ? 	'yes': 'no';
      
        
        return $response;
    }//end function get_login
    
}//end class
?>