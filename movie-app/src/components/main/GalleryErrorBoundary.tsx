import React, {ReactNode} from 'react';

type GalleryErrorBoundaryState = { hasError: boolean }
type GalleryErrorBoundaryProps = { children?: ReactNode }
export default class GalleryErrorBoundary extends React.Component<GalleryErrorBoundaryProps, GalleryErrorBoundaryState> {

    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <span>Gallery failed to load sorry for inconvenience.</span>;
        }
        return this.props.children;
    }
}