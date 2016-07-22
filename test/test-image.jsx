//jshint ignore:start

var React = require( 'react' );
var TestUtils = require( 'react-addons-test-utils' );
var should = require( 'chai' ).should();

var Image = require( '../image' );

describe( 'Image component', function() {
  it( 'Renders the image and description', function() {
    var url = "http://www.example.com/image.png";
    var description = "Example description";

    /*React provides the Test Utilities addon.*/

    // Create an instance of the renderer.
    var renderer = TestUtils.createRenderer();

    // Render an Image component, providing an example URL and description.
    renderer.render( <Image url={url} description={description} /> );

    // Call the getRenderOutput method of the renderer.
    var result = renderer.getRenderOutput();

    // Check that the correct class name is set.
    result.props.className.should.equal( 'gallery-image' );

    // Check that there is an image with the correct src and alt attributes.
    var img = result.props.children[ 0 ];
    img.type.should.equal( 'img' );
    img.props.src.should.equal( url );
    img.props.alt.should.equal( description );

    // Check that there is a <p> tage containing the description.
    var p = result.props.children[ 1 ];
    p.type.should.equal( 'p' );
    p.props.children.should.equal( description );
  } );
} );
