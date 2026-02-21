import type { JSX } from "solid-js";

type Props = {
  size?: number;
  class?: string;
};

export default function MarlOsLogo(props: Props): JSX.Element {
  const size = props.size ?? 24;
  return (
    <img
      src="/marl-os-logo.svg"
      alt="MARL OS"
      width={size}
      height={size}
      class={`inline-block ${props.class ?? ""}`}
    />
  );
}

// Backward compatibility alias
export { MarlOsLogo as OpenWorkLogo };
