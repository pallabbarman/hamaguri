import { Divider, List, ListItem, Stack, Typography } from '@mui/material';

const ProductDetailsInfo = () => {
    return (
        <Stack spacing={1}>
            <Typography variant="h3">
                A scientifically balanced blend of natural ingredients designed to support early
                growth and development
            </Typography>
            <Typography variant="h2" color="lime">
                &#2547;150.00
            </Typography>
            <Typography variant="caption">
                Provides essential nutrients including protein, minerals, and sustained energy. Best
                used as part of a varied diet, following recommended feeding guidelines:
            </Typography>
            <Divider />
            <List component="ul" sx={{ listStyleType: 'decimal', pl: 1.5 }}>
                <ListItem sx={{ display: 'list-item' }}>
                    <strong>Lentils: </strong>
                    Lentils is rich in plant-based protein, essential amino acids, and iron,
                    supporting tissue development, muscle growth, and overall healthy development in
                    infants.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <strong>Semolina: </strong>
                    Semolina provides easily digestible complex carbohydrates and B vitamins,
                    offering sustained energy release and supporting your baby’s daily activity and
                    metabolism.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <strong>Banana Powder: </strong>
                    Banana powder is rich in potassium, natural sugars, and dietary fiber, helping
                    maintain electrolyte balance, support gentle digestion, and provide quick
                    energy.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <strong>Pumpkin Powder: </strong>
                    Pumpkin powder contains beta-carotene and antioxidants, which support immune
                    function, promote healthy vision, and protect developing cells.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <strong>White Sesame (Til): </strong>
                    White Sesame (Til) White sesame is a nutrient-dense source of calcium, iron, and
                    healthy fats, essential for strong bones, brain development, and healthy blood
                    formation.
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <strong>Vegetable Mix (Carrot + Sweet Pumpkin): </strong>
                    The vegetable mix is rich in vitamins, minerals, and dietary fiber, promoting
                    gut health, strengthening immunity, and supporting overall nutritional balance.
                </ListItem>
            </List>
        </Stack>
    );
};

export default ProductDetailsInfo;
