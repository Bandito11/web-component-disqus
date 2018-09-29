/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface DisqusCommentCount {
    'config': any;
    'shortname': any;
  }
  interface DisqusCommentCountAttributes extends StencilHTMLAttributes {
    'config'?: any;
    'shortname'?: any;
  }

  interface DisqusCommentEmbed {
    'commentId': any;
    'height': any;
    'showMedia': any;
    'showParentComment': any;
    'width': any;
  }
  interface DisqusCommentEmbedAttributes extends StencilHTMLAttributes {
    'commentId'?: any;
    'height'?: any;
    'showMedia'?: any;
    'showParentComment'?: any;
    'width'?: any;
  }

  interface DisqusDiscussionEmbed {
    'config': any;
    'shortname': string;
  }
  interface DisqusDiscussionEmbedAttributes extends StencilHTMLAttributes {
    'config'?: any;
    'shortname'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'DisqusCommentCount': Components.DisqusCommentCount;
    'DisqusCommentEmbed': Components.DisqusCommentEmbed;
    'DisqusDiscussionEmbed': Components.DisqusDiscussionEmbed;
  }

  interface StencilIntrinsicElements {
    'disqus-comment-count': Components.DisqusCommentCountAttributes;
    'disqus-comment-embed': Components.DisqusCommentEmbedAttributes;
    'disqus-discussion-embed': Components.DisqusDiscussionEmbedAttributes;
  }


  interface HTMLDisqusCommentCountElement extends Components.DisqusCommentCount, HTMLStencilElement {}
  var HTMLDisqusCommentCountElement: {
    prototype: HTMLDisqusCommentCountElement;
    new (): HTMLDisqusCommentCountElement;
  };

  interface HTMLDisqusCommentEmbedElement extends Components.DisqusCommentEmbed, HTMLStencilElement {}
  var HTMLDisqusCommentEmbedElement: {
    prototype: HTMLDisqusCommentEmbedElement;
    new (): HTMLDisqusCommentEmbedElement;
  };

  interface HTMLDisqusDiscussionEmbedElement extends Components.DisqusDiscussionEmbed, HTMLStencilElement {}
  var HTMLDisqusDiscussionEmbedElement: {
    prototype: HTMLDisqusDiscussionEmbedElement;
    new (): HTMLDisqusDiscussionEmbedElement;
  };

  interface HTMLElementTagNameMap {
    'disqus-comment-count': HTMLDisqusCommentCountElement
    'disqus-comment-embed': HTMLDisqusCommentEmbedElement
    'disqus-discussion-embed': HTMLDisqusDiscussionEmbedElement
  }

  interface ElementTagNameMap {
    'disqus-comment-count': HTMLDisqusCommentCountElement;
    'disqus-comment-embed': HTMLDisqusCommentEmbedElement;
    'disqus-discussion-embed': HTMLDisqusDiscussionEmbedElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
