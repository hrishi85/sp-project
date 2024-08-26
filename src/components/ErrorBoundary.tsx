import { Component, ErrorInfo } from 'react';

interface ErrorBoundaryProps {
  children:any
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = {hasError: false}

  static getDerivedStateFromError(error:any) {
    return { hasError: true, error:error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render() {
    if(this.state.hasError) {
      return <h2>Something went wrong!</h2>;
    }
    return this.props.children
  }
}

export default ErrorBoundary;

