import { Center, HStack, Text } from "native-base";
import CountryFlag from "react-native-country-flag";

import { Input } from "./Input";

interface Props {
  code: string;
  position: "left" | "right";
  onChangeText: (value: string) => void;
  hasGuess?: boolean;
  points?: null | number;
}

export function Team({
  code,
  position,
  onChangeText,
  hasGuess,
  points,
}: Props) {
  return (
    <HStack alignItems="center">
      {position === "left" && (
        <CountryFlag isoCode={code} size={25} style={{ marginRight: 12 }} />
      )}

      {hasGuess === true ? (
        <Center bg="gray.700" h={8} px={4} borderColor="gray.600" rounded="sm">
          <Text color="white" fontSize="xs">
            {points}
          </Text>
        </Center>
      ) : (
        <Input
          w={10}
          h={9}
          textAlign="center"
          fontSize="xs"
          keyboardType="numeric"
          onChangeText={onChangeText}
        />
      )}

      {position === "right" && (
        <CountryFlag isoCode={code} size={25} style={{ marginLeft: 12 }} />
      )}
    </HStack>
  );
}
