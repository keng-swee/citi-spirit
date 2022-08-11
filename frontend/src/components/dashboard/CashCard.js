import { createStyles, Progress, Text, Group, Paper } from '@mantine/core';


const ICON_SIZE = 60;

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    overflow: 'visible',
    padding: theme.spacing.xl,
    paddingTop: theme.spacing.xl * 1.5 + ICON_SIZE / 3,
  },

  icon: {
    position: 'absolute',
    top: -ICON_SIZE / 3,
    left: `calc(50% - ${ICON_SIZE / 2}px)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },
}));

export function StatsCard() {
  const { classes } = useStyles();

 
  return ( 
    <Paper radius="md" withBorder className={classes.card} mt={ICON_SIZE / 3}>

        <Text align="center" weight={700} className={classes.title}>
            Cash
          </Text>

        <Group position="apart" mt="xs">
          <Text size="sm" color="dimmed">
            Goal : S$ 10000
          </Text>
          <Text size="sm" color="dimmed">
          {/* {Math.round((data.value)/10000*100)}% */}
            {800/10000*100}%
          </Text>
        </Group>

        {/* <Progress value={(data.value)/10000*100} mt={5} /> */}
        <Progress value={800/10000*100} mt={5} />

        <Group position="apart" mt="md">
          <Text size="sm"> 
          {/* S$ {(data.value)} / S$ 10000 */}
          S$ 800 / S$ 10000
            </Text>
        </Group>
      </Paper>
  );
}

export default StatsCard