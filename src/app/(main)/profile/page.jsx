import { UpdateUserModal } from "@/components/auth/UpdateUserModel";
import { auth } from "@/lib/auth";
import { Avatar } from "@heroui/react";
import { Card } from "@heroui/react";
import { headers } from "next/headers";
import React from "react";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session.user;
  return (
    <div>
      <Card className="max-w-96 mx-auto flex flex-col items-center border mt-5">
        <Avatar className="h-20 w-20">
          <Avatar.Image
            alt="John Doe"
            src={user.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
        </Avatar>

        <h2 className="text-xl font-bold">{user.name}</h2>
        <p className="text-muted">{user.email}</p>
        <UpdateUserModal />
      </Card>
    </div>
  );
};

export default ProfilePage;
