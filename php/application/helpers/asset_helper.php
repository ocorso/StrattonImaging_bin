<?php  if (!defined('BASEPATH')) exit('No direct script access allowed');

    function asset($type = 'css', $source = NULL, $attrib = NULL, $urlType = 'relative')
    {    
    	switch($urlType)
    	{
    		case 'relative':
    			$href = config_item('base_path');
    		break;
    		
    		case 'absolute':
    			$href = base_url();
    		break;
    		
    		case 'remote':
    			$href = '';
    		break;
    	}

		$source = $href . $source;

		$attributes = '';
		if($attrib)
		{
			foreach($attrib as $key=>$value) {
				$attributes .= $key . '="' . $value . '" ';
			}
		}

        switch ($type)
        {            
            case 'css': 
            {
                return '<link rel="stylesheet" type="text/css" href="' . $source . '" ' . $attributes . ' />'."\n";
            }
            case 'js':
            {
                return '<script type="text/javascript" src="' . $source .'"></script>'."\n";
            }
            case 'img':
            {
                return '<img src="'.$source.'" '.$attributes.' />'."\n";
            }
        } 
    }