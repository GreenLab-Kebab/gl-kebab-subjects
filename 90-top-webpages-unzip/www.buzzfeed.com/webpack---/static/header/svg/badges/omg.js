import { h } from 'preact';
import { SvgUse } from '../';

const attributes = {
  width: 1024,
  height: 1024,
  id: 'omg-badge'
};

export const OmgBadge = () => (
  <symbol {...attributes}>
    <path fill="#fe0" d="M955.3 256C814 11.2 500.9-72.7 256 68.7 11.2 210-72.7 523.1 68.7 768 210 1012.8 523.1 1096.7 768 955.3 1012.8 814 1096.7 500.9 955.3 256z"/>
    <path id="omg" class="svg-gray" d="M252.7 577.1c-51.4 29.7-61 82.5-37.5 123 23.4 40.6 74.1 59 125.5 29.3 51.7-29.8 61.1-82.9 37.7-123.5-23.5-40.6-74-58.7-125.7-28.8zM313 681.6c-16.5 9.5-33 2.6-42.3-13.6-9.2-15.9-7-33.6 9.5-43.2 16.8-9.7 33.3-2.8 42.4 13.2 9.5 16.2 7.3 33.9-9.6 43.6zm301.7-255.5l60.7 105.2-54.1 31.2-48.9-84.7c-5-8.7-13.9-13.6-25.9-6.7-12 6.9-14.5 18-15.6 24.3l51.7 89.5-54.1 31.2-48.9-84.7c-5-8.7-13.6-13.8-25.9-6.7-11.7 6.8-14.2 17.8-15.3 24.1l51.7 89.5-54.1 31.2-83.8-145.1 54.1-31.2 9.5 16.5c1.6-11.8 13-34.4 36.5-47.9 20.4-11.8 39.5-12.8 56.5 1.4 1.1-17.5 12.6-41.3 36-54.9 26.7-15.3 52.6-12.2 69.9 17.8zm152.6-141.4L713.2 316l8.8 15.3c-19.7-7.1-36.8-4-51.8 4.7-35.8 20.6-49.8 60.8-21.9 109.2 28.6 49.6 70.6 55.8 105.5 35.6 15-8.7 25.4-21.9 29.6-43.1l4.5 7.8c14.7 25.5-3.5 42.5-16.1 49.8-15.6 9-34.9 13.8-52.5 9.1l-.6 51.6c27.6 4.1 53.7-2.1 78.6-16.5 36.1-20.8 81-62.4 44.7-125.2l-74.7-129.6zM745 422.2c-14.7 8.5-31 8.7-41.3-9-10.2-17.7-1.9-31.7 12.8-40.2 6.9-4 19-6.6 27.6-3.5l17.7 30.6c-1.6 8.9-9.9 18.1-16.8 22.1z"/>
  </symbol>
);

export const UseOmgBadge = ({...props}) => (
  <SvgUse id={attributes.id} viewBox={`0 0 ${attributes.width} ${attributes.height}`} {...props} />
);