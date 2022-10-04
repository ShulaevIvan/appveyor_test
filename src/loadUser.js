import httpGet from './http';

export default function loader(id) {
  const data = httpGet(`http://server:8080/users/${id}`);
  return JSON.parse(data);
}
