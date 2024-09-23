import Card from "@/components/card";

type Props = {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
};

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: Props) {
  let isLoggedIn = false;
  return isLoggedIn ? (
    <div>
      <>{children}</>
      <div style={{ display: "flex", gap: "1rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Card>{users}</Card>
          <Card>{revenue}</Card>
        </div>
        <Card>{notifications}</Card>
      </div>
    </div>
  ) : (
    login
  );
}
