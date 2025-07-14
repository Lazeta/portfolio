// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

// type ButtonPropsType = {
//     title: string;
//     width?: string;
//     font?: string;
//     children?: React.ReactNode;
// };

// export const BasicButtons = (props: ButtonPropsType) => {
//     const {title, children} = props;

//   return (
//     <Stack spacing={2} direction="row">
//       <Button variant="text">{children || title}</Button>
//       <Button variant="contained">{children || title}</Button>
//       <Button variant="outlined">{children || title}</Button>
//     </Stack>
//   );
// }

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}