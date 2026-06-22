type Props = {
  location: string;
  setLocation: (value: string) => void;
};

export default function LocationFilter({
  location,
  setLocation,
}: Props) {
  return (
    <select
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      className="w-full p-3 border rounded-lg mb-4"
    >
      <option value="">All Locations</option>
      <option value="Noida">Noida</option>
      <option value="Delhi">Delhi</option>
    </select>
  );
}