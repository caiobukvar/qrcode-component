
import { Image, Text, VStack } from '@chakra-ui/react';
import '../../App.css';
import QRcode from '../../assets/img/qrcode-component/qr-code.svg'

function QRCodeCard() {
  return (
    <VStack className='card-container'>
      <VStack className='qr-box'>
        <Image src={QRcode} alt="cardbg" />

      </VStack>
      <VStack spacing={10}
        maxW='320px'
        textAlign={'center'}
        p='0 0 20px 0'>
        <Text color='#1F314F' fontWeight={700} fontSize='26px'>
          Improve your front-end skill by building projects
        </Text>
        <Text color='#7D889E' fontWeight={500} fontSize='18px'>
          Scan the QR code to visit
          Frontend Mentor and take your coding skills to the next level
        </Text>
      </VStack>
    </VStack >
  );
}

export default QRCodeCard;