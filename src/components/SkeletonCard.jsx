import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const SkeletonCard = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="circular" width={60} height={60} />
      <Skeleton variant="rounded" width={300} height={70} />
      {/* For variant="text", adjust the height via font-size */}
      {/* For other variants, adjust the size with `width` and `height` */}
      {/* <Skeleton varia nt="text" sx={{ fontSize: "1rem" }} /> */}
      {/* <Skeleton variant="rectangular" width={210} height={100} /> */}
    </Stack>
  );
};

export default SkeletonCard;
