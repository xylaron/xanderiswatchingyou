import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer: React.FC = () => {
  const mapStyles = {
    height: "50vh",
    width: "50%",
  };

  const defaultCenter = {
    lat: 22.286394,
    lng: 114.157868,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={16} center={defaultCenter}>
        <Marker key="IFC Tower" position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
