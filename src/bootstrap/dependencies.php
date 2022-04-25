<?php
$files = array_merge(
    glob('../dependencies/*.php' ?: [])
);

$config = array_map(function ($file) {
    return require_once $file;
}, $files);

return array_merge_recursive(...$config);
