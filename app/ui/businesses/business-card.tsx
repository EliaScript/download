import Image from "next/image";

export function BusinessCard({
  name,
  address,
  email,
  phone,
  opening_hours,
  image_url,
}: {
  name: string;
  address: string;
  email: string;
  phone: string;
  opening_hours: string;
  image_url: string;
}) {
  return (
    <div className="rounded-xl bg-gray-50 shadow-sm p-4">
      <div className="flex items-center gap-4">
        <Image
          src={image_url}
          alt={name}
          width={60}
          height={60}
          className="rounded-lg object-cover"
        />
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>

      <div className="mt-4 text-sm text-gray-700 space-y-1">
        <p>
          <strong>Address:</strong> {address}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Hours:</strong> {opening_hours}
        </p>
      </div>
    </div>
  );
}
