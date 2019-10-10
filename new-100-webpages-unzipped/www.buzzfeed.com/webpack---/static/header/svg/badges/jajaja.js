import {
    h
} from 'preact';
import {
    SvgUse
} from '../';

const attributes = {
    width: 1024,
    height: 1024,
    id: 'jajaja-badge'
};

export const JajajaBadge = () => ( <
    symbol { ...attributes
    } >
    <
    path fill = "#fe0"
    d = "M955.3 256C814 11.2 500.9-72.7 256 68.7 11.2 210-72.7 523.1 68.7 768 210 1012.8 523.1 1096.7 768 955.3 1012.8 814 1096.7 500.9 955.3 256z" / >
    <
    path id = "jajaja"
    class = "svg-gray"
    d = "M320.6 692c17.2 29.8 15.4 60.5-18.2 79.9-17.5 10.1-24.3 11.1-37 10.8l-8.1-37.9c6.9.8 10.3.1 17-3.8 7.9-4.6 9.4-13.1 3-24.1l-64-110.9 43.2-24.9L320.6 692zm-90.5-106.8c13.4-7.8 18-24.8 10.2-38.2-7.8-13.4-24.8-18-38.2-10.2-13.4 7.8-18 24.8-10.2 38.2 7.7 13.4 24.7 17.9 38.2 10.2zm223.7 36.6l-43.2 24.9-6.4-11c-1.8 11.9-12.6 25.8-27 34.2-17.3 10-46.6 11.2-61.9-15.2-16.6-28.8 1.2-50 18.5-60 15.1-8.7 31.6-11.8 42.4-7.5l-6.9-12c-4.7-8.2-15.8-10.1-29.9-1.9-10.8 6.2-20.5 17.6-25.6 29.8l-30-18.2c8.4-21.5 27.1-39 44.6-49.1 28.8-16.6 62.7-22.8 85 15.9l40.4 70.1zm-61.4-6.5l-3.7-6.5c-5.2-2.4-13.9-.3-20.6 3.6-7.2 4.2-13.7 11.1-9.6 18.3 4.2 7.2 13.3 4.8 20.5.6 6.7-3.8 12.9-10.3 13.4-16zm57.2-145.6l-43.2 24.9 64 110.9c6.4 11 4.9 19.6-3 24.1-6.7 3.9-10.2 4.6-17 3.8l8.1 37.9c12.7.4 19.5-.7 37-10.8 33.6-19.4 35.4-50.2 18.2-79.9l-64.1-110.9zm-26.5 4.1c13.4-7.8 18-24.8 10.2-38.2-7.8-13.4-24.8-18-38.2-10.2-13.4 7.8-18 24.8-10.2 38.2 7.7 13.3 24.8 17.9 38.2 10.2zm223.7 36.6l-43.2 24.9-6.4-11c-1.8 11.9-12.6 25.8-27 34.2-17.3 10-46.6 11.2-61.9-15.2-16.6-28.8 1.2-50 18.5-60 15.1-8.7 31.6-11.8 42.4-7.5l-6.9-12c-4.7-8.2-15.8-10.1-29.9-1.9-10.8 6.2-20.5 17.6-25.6 29.8l-30-18.2c8.4-21.5 27.1-39 44.6-49.1 28.8-16.6 62.7-22.8 85 15.9l40.4 70.1zm-61.3-6.5l-3.7-6.5c-5.2-2.4-13.9-.3-20.6 3.6-7.2 4.2-13.7 11.1-9.6 18.3 4.2 7.2 13.3 4.8 20.5.6 6.6-3.8 12.8-10.3 13.4-16zm57.1-145.7l-43.2 24.9 64 110.9c6.4 11 4.9 19.6-3 24.1-6.7 3.9-10.2 4.6-17 3.8l8.1 37.9c12.7.4 19.5-.7 37-10.8 33.6-19.4 35.4-50.2 18.2-79.9l-64.1-110.9zm-26.5 4.1c13.4-7.8 18-24.8 10.2-38.2-7.8-13.4-24.8-18-38.2-10.2-13.4 7.8-18 24.8-10.2 38.2 7.7 13.4 24.8 18 38.2 10.2zm183.3-33.5l40.5 70.1-43.2 24.9-6.4-11c-1.8 11.9-12.6 25.8-27 34.2-17.3 10-46.6 11.2-61.9-15.2-16.6-28.8 1.2-50 18.5-60 15.1-8.7 31.6-11.8 42.4-7.5l-6.9-12c-4.7-8.2-15.8-10.1-29.9-1.9-10.8 6.2-20.5 17.6-25.6 29.8l-30-18.2c8.4-21.5 27.1-39 44.6-49.1 28.7-16.6 62.6-22.7 84.9 15.9zm-20.9 63.6l-3.7-6.5c-5.2-2.4-13.9-.3-20.6 3.6-7.2 4.2-13.7 11.1-9.6 18.3 4.2 7.2 13.3 4.8 20.5.6 6.7-3.8 12.9-10.2 13.4-16z" / >
    <
    /symbol>
);

export const UseJajajaBadge = ({ ...props
}) => ( <
    SvgUse id = {
        attributes.id
    }
    viewBox = {
        `0 0 ${attributes.width} ${attributes.height}`
    } { ...props
    }
    />
);