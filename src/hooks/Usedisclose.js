import { useState } from "react";


const Usedisclose = () => {
  const [IsOpen, setIsOpen] = useState(false)
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);
  return (
    {onClose,onOpen,IsOpen}
  )
}

export default Usedisclose
