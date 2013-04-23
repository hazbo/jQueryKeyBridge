# jQuery Key Bridge

A small and simple jQuery plugin that allows you to simulate a key press programmatically.

I'm currently working on something that needs to simulate a keypress, triggered by a totally
different event. By doing this you can essentially map any event to a keypress event. This
version uses jQuery, however I will soon be releasing a version that does not require it.
This is just a very small and simple plugin.

## Installation

	<script type="text/javascript" src="jQuery-KeyBridge-0.1.js"></script>

## Usage

	$('body').keyBridge('w');

The above will simulate pressing 'w', without anybody actually pressing it.

### Extra Info

This is just the start of a very small and simple jQuery plugin. I intend to
improve it a lot and add new features that help you map any event to a
keyboard (press) event.

Feel free to contribute!