import React, { PureComponent } from 'react';
import Markdown from 'remarkable';

export class Remarkable extends PureComponent {
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.options !== this.props.options) {
      this.md = new Markdown(nextProps.options);
    }
  }

  renderMarkdown(source) {
    if (!this.md) {
      this.md = new Markdown(this.props.options);
    }
    return this.md.render(source);
  }

  content() {
    if (this.props.source) {
      return <span dangerouslySetInnerHTML={{ __html: this.renderMarkdown(this.props.source) }} />;
    } else {
      return React.Children.map(this.props.children, child => {
        if (typeof child === 'string') {
          return <span dangerouslySetInnerHTML={{ __html: this.renderMarkdown(child) }} />;
        } else {
          return child;
        }
      });
    }
  }

  render() {
    var Container = this.props.container;
    return (
      <Container>
        {this.content()}
      </Container>
    );
  }

};

export default Remarkable;