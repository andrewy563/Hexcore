import { useSelector } from "src/redux/hooks";

const useTotalDamage = () => {
  const damage = useSelector((state) => state.damage);
  const defense = useSelector((state) => state.defense);

  const calculateTotalDamage = (damage: number, resistance: number): number =>
    damage / (1 + resistance / 100);

  const totalPhysical = calculateTotalDamage(
    damage.physicalDamage,
    defense.armor
  );
  const totalMagical = calculateTotalDamage(
    damage.magicDamage,
    defense.magicResistance
  );

  return [totalPhysical, totalMagical];
};

export default useTotalDamage;
