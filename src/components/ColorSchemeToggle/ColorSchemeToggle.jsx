import { ActionIcon, Group, useMantineColorScheme } from "@mantine/core";
import { CiCloudMoon, CiCloudSun } from "react-icons";

export default function ColorSchemeToggle() {
  // const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center" mt="xl">
      <ActionIcon
        // onClick={() => toggleColorScheme()}
        size="xl"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          color:
            theme.colorScheme === "dark"
              ? theme.colors.yellow[4]
              : theme.colors.blue[6],
        })}
      >
        {/* {colorScheme === "dark" ? (
          <CiCloudSun size={24} />
        ) : (
          <CiCloudMoon size={24} />
        )} */}
      </ActionIcon>
    </Group>
  );
}
