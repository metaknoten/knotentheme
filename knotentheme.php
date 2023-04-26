<?php
namespace Grav\Theme;

use Grav\Common\Theme;

class Knotentheme extends Theme
{
    // Access plugin events in this class
    public function onTwigSiteVariables()
    {
        require_once __DIR__ . '/class/CollectionSorter.php';
        $this->grav['twig']->twig_vars['sorter'] = new CollectionSorter();
    }

    /*
    * {% set asc_order = sorter.byDate(page.collection, 'custom_date_field') %}
    * {% set desc_order = sorter.byDate(page.collection, 'custom_date_field', false) %}
    */
}
