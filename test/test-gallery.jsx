//jshint ignore:start

var React = require( 'react' );
var TestUtils = require( 'react-addons-test-utils' );
var should = require( 'chai' ).should();

// Require gallery and image
var Gallery = require( '../gallery' );
var Image = require( '../image' );

describe( 'Gallery component', function() {
  it( 'Renders a series of the images', function() {
    var url = "http://www.example.com/image.png";
    var description = "Example description";

    var images = [ {
      url: 'http://urlfirst.com',
      description: 'first text',
    }, {
      url: 'http://urlsecond.com',
      description: 'second text',
    } ];

    /*React provides the Test Utilities addon.*/

    // Create an instance of the renderer.
    var renderer = TestUtils.createRenderer();

    // Render an Gallery component, providing an example URL and description.
    renderer.render( <Gallery images={images} /> );

    // Call the getRenderOutput method of the renderer.
    var result = renderer.getRenderOutput();

    // Check that the correct class name is set.
    result.props.className.should.equal( 'gallery' );

    // Check that the correct number of Images are rendered.
    result.props.children.length.should.equal( 2 );

    // Check that each image has the correct props set.
    var image1 = result.props.children[ 0 ];
    var image2 = result.props.children[ 1 ];

    image1.props.url.should.equal( images[ 0 ].url );
    image1.props.description.should.equal( images[ 0 ].description );
    image1.key.should.equal( '0' );

    image2.props.url.should.equal( images[ 1 ].url );
    image2.props.description.should.equal( images[ 1 ].description );
    image2.key.should.equal( '1' );
  } );
} );
