import Box from '../utils/Box';
import RecordInfo from '../components/RecordInfo/RecordInfo';
import Table from '../components/Table/Table';
import EmitterButton from '../externalControl/EmitterButton';

const MainLayout = () => {
    return (
        <Box className="main">
            <EmitterButton />
            <Table />
            <RecordInfo />
        </Box>
    );
};

export default MainLayout;
