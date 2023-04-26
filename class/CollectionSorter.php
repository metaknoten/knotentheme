<?php
namespace Grav\Theme;

use Grav\Common\Grav;

class CollectionSorter
{
    protected $grav;
    protected $field;
    protected $asc;

    public function __construct() {
        $this->grav = Grav::instance();
    }

    public function byDate($collection, $field, $asc = true)
    {
        $this->field = $field;
        $this->asc = $asc;

        $array = [];
        foreach($collection as $p) {
            $array[] = $p;
        }

        usort($array, function($a, $b) {

            if (!isset($a->header()->{$this->field}, $b->header()->{$this->field})) {
                return 0;
            }

            $valA = $a->header()->{$this->field};
            $valB = $b->header()->{$this->field};

            if ($valA == $valB) {
                return 0;
            }

            if ($this->asc) {
                return strtotime($valA) - strtotime($valB);
            }
            return strtotime($valB) - strtotime($valA);
        });

        return $array;
    }
}